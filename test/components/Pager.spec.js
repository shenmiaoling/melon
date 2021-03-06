/**
 * @file Pager单测
 * @author cxtom(cxtom2008@gmail.com)
 */

import React from 'react';
import TestUtils from 'react-addons-test-utils';

import then from '../then';

import Pager from '../../src/Pager';
import Icon from '../../src/Icon';


describe('Pager', () => {

    it('dom', function () {
        const renderer = TestUtils.createRenderer();
        renderer.render(
            <Pager total={2} page={1} />
        );
        let actualElement = renderer.getRenderOutput();
        let expectedElement = (
            <ul
                className="ui-pager"
                page={1}
                disabled={false}
                lang={{ellipsis: '...', next: '下一页', prev: '上一页'}}
                onClick={function noRefCheck() {}}>
                <li
                    className="ui-pager-item state-prev"
                    data-page={0}
                    data-role="pager-item">
                    <Icon data-page={0} data-role="pager-item" icon="navigate-before" />
                </li>
                <li
                    className={'ui-pager-item'}
                    key={1}
                    data-role="pager-item"
                    data-page={0}>
                    1
                </li>
                <li
                    className={'ui-pager-item state-current'}
                    key={2}
                    data-role="pager-item"
                    data-page={1}>
                    2
                </li>
                <li
                    className="ui-pager-item state-disabled state-next"
                    data-page={1}
                    data-role="pager-item">
                    <Icon data-page={1} data-role="pager-item" icon="navigate-next" />
                </li>
            </ul>
        );
        expect(actualElement).toEqualJSX(expectedElement);
    });

    it('showAlays', () => {
        const renderer = TestUtils.createRenderer();
        renderer.render(
            <Pager total={1} page={0} showAlways={false} />
        );
        let actualElement = renderer.getRenderOutput();
        let expectedElement = (
            <ul
                className="ui-pager"
                page={0}
                disabled={false}
                lang={{ellipsis: '...', next: '下一页', prev: '上一页'}}>
            </ul>
        );
        expect(actualElement).toEqualJSX(expectedElement);
    });

    describe('click', () => {

        let component;
        let items;

        let current;
        let prev;
        let next;

        beforeEach(() => {
            component = TestUtils.renderIntoDocument(<Pager total={10} page={1} />);
            items = TestUtils.scryRenderedDOMComponentsWithClass(component, 'ui-pager-item');

            current = TestUtils.findRenderedDOMComponentWithClass(component, 'ui-pager-item state-current');
            prev = TestUtils.findRenderedDOMComponentWithClass(component, 'ui-pager-item state-prev');
            next = TestUtils.findRenderedDOMComponentWithClass(component, 'ui-pager-item state-next');
        });

        afterEach(() => {
            component = current = prev = next = null;
            items.length = 0;
            items = null;
        });

        it('base', () => {
            expect(TestUtils.isCompositeComponent(component)).toBeTruthy();
            expect(TestUtils.isDOMComponent(current)).toBeTruthy();
            expect(TestUtils.isDOMComponent(prev)).toBeTruthy();
            expect(TestUtils.isDOMComponent(next)).toBeTruthy();
            expect(items.length).toEqual(9);
            expect(component.props.page).toEqual(1);
            expect(component.state.page).toEqual(1);
        });

        it('click page', done => {

            TestUtils.Simulate.click(items[5]);

            then(() => {
                expect(component.state.page).toEqual(4);
                done();
            });
        });

        it('click prev', done => {

            TestUtils.Simulate.click(prev);

            then(() => {
                expect(component.state.page).toEqual(0);
                done();
            });
        });

        it('click next', done => {

            TestUtils.Simulate.click(next);

            then(() => {
                expect(component.state.page).toEqual(2);
                done();
            });
        });

    });


    describe('controlled', () => {

        it('click', done => {
            const spy = jasmine.createSpy();
            let pager;

            class TestComponent extends React.Component {

                constructor(props) {
                    super(props);
                    this.state = {page: 0};
                }

                render() {
                    return (
                        <Pager
                            total={10}
                            page={this.state.page}
                            onChange={({page, target}) => {
                                expect(page).toEqual(4);
                                expect(target).toEqual(pager);
                                this.setState({page});
                                spy();
                            }} />
                    );
                }
            }

            const component = TestUtils.renderIntoDocument(
                <TestComponent />
            );

            pager = TestUtils.findRenderedComponentWithType(component, Pager);

            const items = TestUtils.scryRenderedDOMComponentsWithTag(component, 'li');
            TestUtils.Simulate.click(items[5]);
            then(() => {
                expect(spy.calls.count()).toEqual(1);
                expect(component.state.page).toEqual(4);
                done();
            });
        });

    });


});
