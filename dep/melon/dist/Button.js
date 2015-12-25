define('melon/Button', [
    'require',
    'exports',
    'module',
    './babelHelpers',
    'react',
    './common/util/cxBuilder',
    './ripples/TouchRipple'
], function (require, exports, module) {
    var babelHelpers = require('./babelHelpers');
    var React = require('react');
    var cx = require('./common/util/cxBuilder').create('Button');
    var TouchRipple = require('./ripples/TouchRipple');
    function Button(props) {
        var hasRipple = props.hasRipple;
        var label = props.label;
        var children = props.children;
        var disabled = props.disabled;
        var others = babelHelpers.objectWithoutProperties(props, [
            'hasRipple',
            'label',
            'children',
            'disabled'
        ]);
        var className = cx(props).addVariants({
            icon: React.Children.count(children) === 1 && typeof children === 'object' && children.type.displayName === 'Icon',
            ripple: hasRipple && !disabled
        }).build();
        return React.createElement('button', babelHelpers._extends({}, others, {
            disabled: disabled,
            className: className
        }), label || children, hasRipple ? React.createElement(TouchRipple, null) : null);
    }
    Button.defaultProps = { hasRipple: true };
    Button.propTypes = { hasRipple: React.PropTypes.bool };
    module.exports = Button;
});