/**
 * @file melon/Progress
 * @author cxtom<cxtom2008@gmail.com>
 * @author leon<ludafa@outlook.com>
 */

import React, {Component, PropTypes} from 'react';
import {create} from 'melon-core/classname/cxBuilder';

const cx = create('Progress');

export default class Progress extends Component {

    constructor(props) {
        super(props);
        this.timers = {};
    }

    componentDidMount() {

        if (this.isDeterminate()) {
            return;
        }

        const isCircle = this.props.shape.toLowerCase() === 'circle';

        if (isCircle) {
            this.scalePath(this.refs.path);
            this.rotateWrapper(this.refs.wrapper);
            return;
        }

        this.barUpdate(
            0,
            'bar1',
            [[-35, 100], [100, -90]]
        );

        this.timers.bar2 = setTimeout(() => {
            this.barUpdate(
                0,
                'bar2',
                [[-200, 100], [107, -8]]
            );
        }, 850);

    }

    componentWillUnmount() {

        Object.keys(this.timers).forEach(name => {
            clearTimeout(this.timers[name]);
            this.timers[name] = null;
        });

        this.timers = {};

    }

    barUpdate(step, barName, stepValues) {

        step = step || 0;
        step %= 4;

        const element = this.refs[barName];

        switch (step) {
            case 0:
                element.style.left = stepValues[0][0] + '%';
                element.style.right = stepValues[0][1] + '%';
                break;
            case 1:
                element.style.transitionDuration = '840ms';
                break;
            case 2:
                element.style.left = stepValues[1][0] + '%';
                element.style.right = stepValues[1][1] + '%';
                break;
            case 3:
                element.style.transitionDuration = '0ms';
                break;
        }

        this.timers[barName] = setTimeout(
            this.barUpdate.bind(this, step + 1, barName, stepValues),
            420
        );

    }

    scalePath(path, step) {

        step = step || 0;
        step %= 3;

        this.timers.path = setTimeout(
            this.scalePath.bind(this, path, step + 1),
            step ? 750 : 250
        );

        if (step === 0) {
            path.style.strokeDasharray = '1, 200';
            path.style.strokeDashoffset = 0;
            path.style.transitionDuration = '0ms';
            return;
        }

        if (step === 1) {
            path.style.strokeDasharray = '89, 200';
            path.style.strokeDashoffset = -35;
            path.style.transitionDuration = '750ms';
            return;
        }

        path.style.strokeDasharray = '89, 200';
        path.style.strokeDashoffset = -124;
        path.style.transitionDuration = '850ms';

    }

    rotateWrapper(wrapper) {

        this.timers.wrapper = setTimeout(this.rotateWrapper.bind(this, wrapper), 10050);

        wrapper.style.transitionDuration = '0ms';
        wrapper.style.transform = 'rotate(0deg)';

        this.timers.wrapperUpdater = setTimeout(() => {
            wrapper.style.transitionDuration = '10s';
            wrapper.style.transform = 'rotate(1800deg)';
            wrapper.style.transitionTimingFunction = 'linear';
        }, 50);

    }

    getRelativeValue() {

        const {value, min, max} = this.props;

        const clampedValue = Math.min(Math.max(min, value), max);
        const rangeValue = max - min;
        const relValue = Math.round(clampedValue / rangeValue * 10000) / 10000;

        return relValue * 100;
    }

    isDeterminate() {
        return this.props.mode.toLowerCase() === 'determinate';
    }

    renderLinear() {

        let children;
        let style;

        if (this.isDeterminate()) {
            style = {
                width: this.getRelativeValue() + '%'
            };
        }
        else {
            children = ([
                <div ref="bar1" className={cx().part('bar1').build()} key="bar1" />,
                <div ref="bar2" className={cx().part('bar2').build()} key="bar2" />
            ]);
        }

        return (
            <div className={cx().part('bar').build()} style={style}>
                {children}
            </div>
        );
    }

    getZoom() {
        return Progress.SIZES[this.props.size] || 1;
    }

    renderCircle() {
        let zoom = this.getZoom();
        let r = 14 * zoom;
        let strokeWidth = 2 * zoom;
        let c = 16 * zoom;

        let pathStyle = {};

        if (this.isDeterminate()) {
            let relVal = this.getRelativeValue();
            pathStyle.strokeDasharray = Math.round(relVal * 1.25 * zoom) + ',' + (200 * zoom);
        }

        return (
            <div ref="wrapper" className={cx().part('wapper').build()}>
                <svg className={cx().part('svg').build()}>
                    <circle ref="path"
                        cx={c}
                        cy={c}
                        r={r}
                        className={cx().part('path').build()}
                        style={pathStyle}
                        fill="none"
                        strokeWidth={strokeWidth}
                        strokeMiterlimit="10" />
                </svg>
            </div>
        );
    }

    render() {

        const {props} = this;

        const {
            shape,
            mode
        } = props;

        const className = cx(props)
            .addVariants(shape, mode)
            .build();

        return (
            <div {...props} className={className}>
                {shape === 'circle' ? this.renderCircle() : this.renderLinear()}
            </div>
        );

    }

}

Progress.displayName = 'Progress';

Progress.SIZES = {
    xxs: 0.75,
    xs: 0.875,
    s: 0.9375,
    l: 1.125,
    xl: 1.25,
    xxl: 1.375,
    xxxl: 1.5
};

Progress.defaultProps = {
    shape: 'linear',
    mode: 'determinate',
    value: 0,
    min: 0,
    max: 100
};

Progress.propTypes = {
    shape: PropTypes.oneOf(['circle', 'linear']),
    mode: PropTypes.oneOf(['determinate', 'indeterminate']),
    value: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number,
    size: PropTypes.oneOf(Object.keys(Progress.SIZES))
};
