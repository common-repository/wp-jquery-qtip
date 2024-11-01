jQuery(document).ready(function()
{
    var classes;
    switch (wp_jquery_qtip_params.tooltip_color) {
      case 'cream':
        classes = 'qtip';
        break;
      case 'dark':
        classes = 'qtip-dark';
        break;
      case 'green':
        classes = 'qtip-green';
        break;
      case 'light':
        classes = 'qtip-light';
        break;
      case 'red':
        classes = 'qtip-red';
        break;
      case 'blue':
        classes = 'qtip-blue';
        break;
      defaul:
        classes = 'qtip-plain';
    }

    var my;
    switch (wp_jquery_qtip_params.tooltip_position) {
      case 'topLeft':
        my = 'top left';
        break;
      case 'topMiddle':
        my = 'top middle';
        break;
      case 'topRight':
        my = 'top right';
        break;
      case 'rightTop':
        my = 'right top';
        break;
      case 'rightMiddle':
        my = 'right middle';
        break;
      case 'rightBottom':
        my = 'right bottom';
        break;
      case 'bottomRight':
        my = 'bottom right';
        break;
      case 'bottomMiddle':
        my = 'bottom middle';
        break;
      case 'bottomLeft':
        my = 'bottom left';
        break;
      case 'leftBottom':
        my = 'left bottom';
        break;
      case 'leftMiddle':
        my = 'left middle';
        break;
      case 'leftTop':
        my = 'left top';
        break;
    }

    var at;
    switch (wp_jquery_qtip_params.tooltip_target) {
      case 'topLeft':
        at = 'top left';
        break;
      case 'topMiddle':
        at = 'top middle';
        break;
      case 'topRight':
        at = 'top right';
        break;
      case 'rightTop':
        at = 'right top';
        break;
      case 'rightMiddle':
        at = 'right middle';
        break;
      case 'rightBottom':
        at = 'right bottom';
        break;
      case 'bottomRight':
        at = 'bottom right';
        break;
      case 'bottomMiddle':
        at = 'bottom middle';
        break;
      case 'bottomLeft':
        at = 'bottom left';
        break;
      case 'leftBottom':
        at = 'left bottom';
        break;
      case 'leftMiddle':
        at = 'left middle';
        break;
      case 'leftTop':
        at = 'left top';
        break;
    }

    jQuery('a[title]').qtip({
        style: {
            classes: classes,
            tip: true,
            textAlign: 'center'
        },
        position: {
            my: my,
            at: at
        }
    });
});
