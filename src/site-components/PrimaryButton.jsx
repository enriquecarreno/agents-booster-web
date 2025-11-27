"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
    '{"events":{"e-145":{"id":"e-145","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-25","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-146"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"042d8bf6-a8f2-788d-680d-a603cf31c689","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"042d8bf6-a8f2-788d-680d-a603cf31c689","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1748806824023},"e-146":{"id":"e-146","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-26","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-145"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"042d8bf6-a8f2-788d-680d-a603cf31c689","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"042d8bf6-a8f2-788d-680d-a603cf31c689","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1748806824023},"e-185":{"id":"e-185","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-186"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".primary-button-wrapper","originalId":"b53561ed-ef33-c078-0855-ff0573390111","appliesTo":"CLASS"},"targets":[{"selector":".primary-button-wrapper","originalId":"b53561ed-ef33-c078-0855-ff0573390111","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":300,"direction":"BOTTOM","effectIn":true},"createdOn":1748810858426}},"actionLists":{"a-25":{"id":"a-25","title":"Primary Button Hover In","actionItemGroups":[{"actionItems":[{"id":"a-25-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".primary-button-bg-shade","selectorGuids":["d5684198-f1dc-baee-e29e-5d41ce9c0158"]},"xValue":0,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-25-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".primary-button-icon","selectorGuids":["6d6604e2-8fa3-038c-6ca1-44e7ccc56761"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]},{"actionItems":[{"id":"a-25-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutExpo","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".primary-button-bg-shade","selectorGuids":["d5684198-f1dc-baee-e29e-5d41ce9c0158"]},"xValue":-102,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-25-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".primary-button-icon","selectorGuids":["6d6604e2-8fa3-038c-6ca1-44e7ccc56761"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1748804667289},"a-26":{"id":"a-26","title":"Primary Button Hover Out","actionItemGroups":[{"actionItems":[{"id":"a-26-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutExpo","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".primary-button-bg-shade","selectorGuids":["d5684198-f1dc-baee-e29e-5d41ce9c0158"]},"xValue":0,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-26-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".primary-button-icon","selectorGuids":["6d6604e2-8fa3-038c-6ca1-44e7ccc56761"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1748804667289},"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function PrimaryButton(
    {
        as: _Component = _Builtin.Link,
        primaryButtonText = "Get Started",

        primaryButtonLink = {
            href: "#"
        }
    }
) {
    _interactions.useInteractions(_interactionsData);

    return (
        <_Component
            className="primary-button-wrapper"
            data-w-id="042d8bf6-a8f2-788d-680d-a603cf31c689"
            button={false}
            block="inline"
            options={primaryButtonLink}><_Builtin.Block className="primary-button-bg-shade" tag="div" /><_Builtin.Block className="primary-button-bg" tag="div"><_Builtin.Image
                    className="primary-button-icon"
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src="https://cdn.prod.website-files.com/691966a97522cf30142cebf7/691966aa7522cf30142cec65_arrow%20icon%20fill.svg" /><_Builtin.Block className="primary-button-text" tag="div">{primaryButtonText}</_Builtin.Block></_Builtin.Block></_Component>
    );
}