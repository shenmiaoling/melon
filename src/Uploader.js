/**
 * @file melon/Uploader
 * @author leon(ludafa@outlook.com)
 */

import React, {PropTypes} from 'react';
import Button from './Button';
import Icon from './Icon';
import Progress from './Progress';
import Link from './Link';
import Validity from 'melon-core/Validity';
import InputComponent from 'melon-core/InputComponent';

import {create} from 'melon-core/classname/cxBuilder';

const cx = create('Uploader');

export default class Uploader extends InputComponent {

    constructor(props, context) {

        super(props, context);

        this.state = {
            ...this.state,
            isUploading: false,
            isUploaded: !!this.props.value
        };

    }


    onFileChange(e) {

        this.setUploading();

        this
            .props
            .upload({
                target: this,
                files: e.target.files
            })
            .then(
                result => this.setFile(result),
                error => this.clearFile()
            );

    }

    setUploading() {
        this.setState({
            isUploading: true
        });
    }

    setFile(value) {

        this.setState({
            isUploaded: true,
            isUploading: false
        }, () => {
            super.onChange({
                type: 'change',
                target: this,
                value
            });
        });
    }

    clearFile() {

        this.setState({
            isUploaded: false,
            isUploading: false
        }, () => {

            super.onChange({
                type: 'change',
                target: this,
                value: ''
            });
        });

    }

    renderUploadFile() {

        const {isUploading, isUploaded} = this.state;

        return isUploading || isUploaded
            ? null
            : (
                <input
                    ref="file"
                    type="file"
                    className={cx().part('file').build()}
                    onChange={e => {
                        this.onFileChange(e);
                    }}
                    accept={this.props.accept} />
            );

    }

    renderUploadButton() {

        const {isUploading, isUploaded, value} = this.state;
        const {size, btnText} = this.props;

        if (isUploading) {
            return (
                <Progress
                    size={size}
                    mode="indeterminate"
                    shape="circle" />
            );
        }

        if (isUploaded) {

            return (
                <div className={cx().part('uploaded').build()}>
                    <Icon icon="done" size={size} /> 已上传
                    <Link
                        size={size}
                        href={value}
                        variants={['button']}
                        target="_blank">
                        查看
                    </Link>
                    <Button
                        size={size}
                        type="button"
                        onClick={() => {
                            this.clearFile();
                        }} >
                        重选
                    </Button>
                </div>
            );
        }

        return (
            <Button
                type="button"
                variants={['raised']}
                onClick={() => {
                    this.refs.file.click();
                }}>
                <Icon icon="file-upload" />
                {btnText}
            </Button>
        );

    }

    render() {

        const props = this.props;
        const {value, name, label} = props;

        return (
            <div className={cx(props).addStates(this.getStyleStates()).build()}>
                <input name={name} type="hidden" value={value} />
                {label ? <label className={cx().part('label').build()}>{label}</label> : null}
                {this.renderUploadFile()}
                {this.renderUploadButton()}
                <Validity validity={this.state.validity} />
            </div>
        );

    }

}

Uploader.displayName = 'Uploader';

Uploader.propTypes = {
    ...InputComponent.propTypes,
    multiple: PropTypes.bool,
    accept: PropTypes.string,
    files: PropTypes.array,
    upload: PropTypes.func.isRequired,
    btnText: PropTypes.string,
    label: PropTypes.string
};

Uploader.defaultProps = {
    ...InputComponent.defaultProps,
    btnText: '点击上传'
};

Uploader.childContextTypes = InputComponent.childContextTypes;
Uploader.contextTypes = InputComponent.contextTypes;
