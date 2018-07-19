// @flow

import {canvasCtx} from '../constants.js';
import {Location, UIElement} from '../core/base/models.js';
import {UIView} from '../core/base/views.js';
import {Menu, MenuItem, MenuButton} from './models.js';
import {drawImage} from '../core/utils';

/**
* ...
*/
export class MenuView extends UIView {
  /**
   * render menu and its items
   */
  render(menu: Menu) {
    if (menu.isDisplayed) {
        this.constructor.drawBackground(menu);
        menu.items.forEach((item, index) => {
            this.constructor.renderItem(item, ++index, menu);
        });
    }

    for (const button of MenuButton.instances) {
        this.constructor.renderButton(button);
    }
      this.constructor.drawBorder(menu);
  }

  /**
   * @param  {Menu | MenuItem} element
   */
  static drawBackground(element: UIElement) {
    if (!element.background) return;
    canvasCtx.fillStyle = element.background;
    canvasCtx.fillRect(element.location.x, element.location.y, element.width, element.height);
  }

  /**
   * @param  {Menu | MenuItem} element
   */
  static drawBorder(element: UIElement) {
    let isBorder = false;
    if (element.borderWidth) {
        canvasCtx.lineWidth = element.borderWidth;
        isBorder = true;
    }
    if (element.borderColor) {
        canvasCtx.strokeStyle = element.borderColor;
        isBorder = true;
    }
    if (isBorder) {
        canvasCtx.strokeRect(element.location.x, element.location.y, element.width, element.height);
    }
  }

  /**
   * [renderItem description]
   * @param  {[type]} item:       MenuItem      [description]
   * @param  {[type]} itemNum: number        [description]
   * @param {{type}} menu: Menu
   */
  static renderItem(item: MenuItem, itemNum: number, menu: Menu) { // FIXME: remove menu here!!!
    if (!item.isDisplayed) return;

    canvasCtx.fillStyle = item.textColor;
    canvasCtx.font = `${item.font} ${item.textSize}px ${item.textFont}`;
    if (item.isSelected) {
        canvasCtx.font = `bold ${canvasCtx.font}`;
    }
    canvasCtx.textAlign = item.textAlign;

    // center by width of the item rect
    // FIXME: add `if` for check whether textAlign === center
    let posX = menu.location.x + item.iconWidth * 1.3;

    // concatenates font sizes of all items above and current + concatenates top margin of all items above and current
    let posY = item.height * itemNum;

    item.width = menu.width;
    const textWidth = canvasCtx.measureText(item.text).width + posX;
    const textHeight = posY - 15;
    // FIXME: should it be in drawElement method maybe? before drawBackground
    // FIXME: remove it
    // use the next algorithm:
    // 1) if item doesn't have location:
    //   - set location to the nearest X, Y:
    //     * where it isn't filled by another item
    //     * check whether height and width also isn't filled
    //     + top and left margin

    // TODO: get X position for centered text item
    let x = menu.location.x + (menu.width / 2) - (item.width / 2);

    let y = posY-item.height;
    item.location = new Location(x, y);
    canvasCtx.fillStyle = item.backgroundColor;
    canvasCtx.fillRect(item.location.x, item.location.y, item.width, item.height);

    canvasCtx.fillStyle = item.textColor;
    canvasCtx.fillText(item.text, posX, textHeight);

    canvasCtx.font = 'normal 14px Helvetica';
    canvasCtx.fillText(item.description, textWidth, textHeight);

    // render icon item
    item.element.view.renderIcon(item.location, item.iconWidth, item.height);
    canvasCtx.strokeStyle = 'green';
    canvasCtx.lineWidth = 5;

    // button Line in item
    if (item.isHovered) {
      MenuView.drawBorder(item);
    } else {
        // canvasCtx.strokeRect(item.location.x, item.location.y, item.width, item.height);
    }
  }

  /**
   * Paint Menu Button
   */
  static renderButton(button: MenuButton) {
    if (!button.isDisplayed) return;
    drawImage(button.img, button.location.x, button.location.y, button.width, button.height);
  }
}
