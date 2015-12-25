/**
 * @file esui-react/TouchRipple
 * @author cxtom<cxtom2010@gmail.com>
 */

const React = require('react');
const ReactDOM = require('react-dom');
const cx = require('../common/util/cxBuilder').create('TouchRipple');
const RippleCircle = require('./RippleCircle');
const _ = require('underscore');
const dom = require('../common/util/dom');

const {
    spring,
    TransitionMotion
} = require('react-motion');

const TouchRipple = React.createClass({

    getInitialState() {
        return  {
            now: 't' + 0,
            center: [0, 0]
        };
    },

    onMouseDown({pageX, pageY}) {

        const {
            top,
            left
        } = this.position;

        this.setState({
            center: [pageX - left - this.radius, pageY - top - this.radius],
            now: 't' + _.now()
        });

    },

    componentDidMount() {
        this.updatePosition();
    },

    componentDidUpdate() {
        this.updatePosition();
    },

    componentWillUnmount() {
        this.position = this.radius = null;
    },

    updatePosition() {
        let main = ReactDOM.findDOMNode(this);
        this.position = dom.getPosition(main);
        this.radius = Math.max(this.position.width, this.position.height) / 2;
    },

    willLeave(key, valOfKey) {
        return {
            ...valOfKey,
            opacity: spring(0, [60, 15]),
            scale: spring(2, [60, 15])
        };
    },

    render() {

        const {
            center: [centerX, centerY],
            now
        } = this.state;

        const styles = {
            [now]: {
                opacity: spring(this.props.opacity),
                scale: spring(0)
            }
        };

        const circleClassName = cx().part('circle').build();

        return (
            <TransitionMotion
                willLeave={this.willLeave}
                styles={styles}>
                {(circles) =>
                    <div
                        onMouseDown={this.onMouseDown}
                        className={cx(this.props).build()}>
                        {Object.keys(circles).map((key) => {
                            let {opacity, scale} = circles[key];
                            opacity = Math.round(opacity * 100) / 100;
                            scale = opacity <= 0.01 ? 2 : Math.round(scale * 100) / 100;
                            return (
                                <RippleCircle
                                    key={key}
                                    className={circleClassName}
                                    opacity={opacity}
                                    scale={scale}
                                    style={{
                                        width: this.radius * 2 || 0,
                                        height: this.radius * 2 || 0,
                                        left: centerX,
                                        top: centerY
                                    }} />
                            );
                        })}
                    </div>
                }
            </TransitionMotion>
        );

    }

});

const {PropTypes} = React;

TouchRipple.defaultProps = {
    opacity: 0.3
};

TouchRipple.propTypes = {
    opacity: PropTypes.number
};

module.exports = TouchRipple;