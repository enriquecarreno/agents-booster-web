"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { PrimaryButton } from "./PrimaryButton";

const _interactionsData = JSON.parse(
    '{"events":{"e-139":{"id":"e-139","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-140"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"29af7eaf-68a4-b74a-f175-ca3700932c7b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"29af7eaf-68a4-b74a-f175-ca3700932c7b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":300,"direction":"BOTTOM","effectIn":true},"createdOn":1748729890046},"e-165":{"id":"e-165","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-166"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".title-small","originalId":"b53561ed-ef33-c078-0855-ff057339012b","appliesTo":"CLASS"},"targets":[{"selector":".title-small","originalId":"b53561ed-ef33-c078-0855-ff057339012b","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":300,"direction":"BOTTOM","effectIn":true},"createdOn":1748810441030},"e-169":{"id":"e-169","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-170"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".footer-social-link","originalId":"b53561ed-ef33-c078-0855-ff0573390154","appliesTo":"CLASS"},"targets":[{"selector":".footer-social-link","originalId":"b53561ed-ef33-c078-0855-ff0573390154","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":300,"direction":"BOTTOM","effectIn":true},"createdOn":1748810492878},"e-171":{"id":"e-171","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-172"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"75e8d627-ba75-caee-17aa-b33d0508d5a9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"75e8d627-ba75-caee-17aa-b33d0508d5a9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":300,"direction":"BOTTOM","effectIn":true},"createdOn":1748810562962},"e-173":{"id":"e-173","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-174"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b53561ed-ef33-c078-0855-ff0573390119","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b53561ed-ef33-c078-0855-ff0573390119","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":300,"direction":"BOTTOM","effectIn":true},"createdOn":1748810573728},"e-175":{"id":"e-175","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-176"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b53561ed-ef33-c078-0855-ff057339011c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b53561ed-ef33-c078-0855-ff057339011c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":300,"direction":"BOTTOM","effectIn":true},"createdOn":1748810583379},"e-177":{"id":"e-177","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-178"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b53561ed-ef33-c078-0855-ff057339011f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b53561ed-ef33-c078-0855-ff057339011f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":300,"direction":"BOTTOM","effectIn":true},"createdOn":1748810596064},"e-179":{"id":"e-179","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-180"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e840afa3-c438-97d0-2c3f-c83a8b17b99d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e840afa3-c438-97d0-2c3f-c83a8b17b99d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":300,"direction":"BOTTOM","effectIn":true},"createdOn":1748810799031},"e-181":{"id":"e-181","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-182"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".section-title-text","originalId":"b53561ed-ef33-c078-0855-ff057339010b","appliesTo":"CLASS"},"targets":[{"selector":".section-title-text","originalId":"b53561ed-ef33-c078-0855-ff057339010b","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":300,"direction":"BOTTOM","effectIn":true},"createdOn":1748810829645},"e-183":{"id":"e-183","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-184"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".section-title-short-text.footer","originalId":"b53561ed-ef33-c078-0855-ff057339010f","appliesTo":"CLASS"},"targets":[{"selector":".section-title-short-text.footer","originalId":"b53561ed-ef33-c078-0855-ff057339010f","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":300,"direction":"BOTTOM","effectIn":true},"createdOn":1748810841773},"e-187":{"id":"e-187","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-188"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".section-title-short-text._2.faq","originalId":"691966aa7522cf30142cec4e|fc13989f-20af-3816-1bca-14eb1bdc6ce2","appliesTo":"CLASS"},"targets":[{"selector":".section-title-short-text._2.faq","originalId":"691966aa7522cf30142cec4e|fc13989f-20af-3816-1bca-14eb1bdc6ce2","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":300,"direction":"BOTTOM","effectIn":true},"createdOn":1748810901910},"e-207":{"id":"e-207","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-208"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".section-title-short-text._2","originalId":"691966aa7522cf30142cec4e|aa56cb9d-dc29-1dbf-df9b-f9445938c838","appliesTo":"CLASS"},"targets":[{"selector":".section-title-short-text._2","originalId":"691966aa7522cf30142cec4e|aa56cb9d-dc29-1dbf-df9b-f9445938c838","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":300,"direction":"BOTTOM","effectIn":true},"createdOn":1748811054498},"e-297":{"id":"e-297","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-298"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".section-title-short-text","originalId":"691966aa7522cf30142cecae|ff84fd1a-2053-d264-2707-f45c628e9c6b","appliesTo":"CLASS"},"targets":[{"selector":".section-title-short-text","originalId":"691966aa7522cf30142cecae|ff84fd1a-2053-d264-2707-f45c628e9c6b","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":300,"direction":"BOTTOM","effectIn":true},"createdOn":1748814111186},"e-381":{"id":"e-381","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-32","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-382"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".footer-link-wrapper","originalId":"68130d80bd59c3c7ef5e85b0|43c5bbc2-7852-ea18-ef3c-97a328aecb69","appliesTo":"CLASS"},"targets":[{"selector":".footer-link-wrapper","originalId":"68130d80bd59c3c7ef5e85b0|43c5bbc2-7852-ea18-ef3c-97a328aecb69","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1745793205380},"e-382":{"id":"e-382","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-33","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-126"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".footer-link-wrapper","originalId":"68130d80bd59c3c7ef5e85b0|43c5bbc2-7852-ea18-ef3c-97a328aecb69","appliesTo":"CLASS"},"targets":[{"selector":".footer-link-wrapper","originalId":"68130d80bd59c3c7ef5e85b0|43c5bbc2-7852-ea18-ef3c-97a328aecb69","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1745793205381},"e-397":{"id":"e-397","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-398"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6b0fa589-7198-4e87-1a57-34795d32be68","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6b0fa589-7198-4e87-1a57-34795d32be68","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":300,"direction":"BOTTOM","effectIn":true},"createdOn":1748819725427},"e-413":{"id":"e-413","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-414"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b53561ed-ef33-c078-0855-ff0573390151","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b53561ed-ef33-c078-0855-ff0573390151","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":300,"direction":"BOTTOM","effectIn":true},"createdOn":1748821469025},"e-445":{"id":"e-445","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-446"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".footer-link-wrapper","originalId":"2a3939ba-e722-d318-1a7c-a88a6c49d86c","appliesTo":"CLASS"},"targets":[{"selector":".footer-link-wrapper","originalId":"2a3939ba-e722-d318-1a7c-a88a6c49d86c","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":300,"direction":"BOTTOM","effectIn":true},"createdOn":1748900292791},"e-512":{"id":"e-512","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-51","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-513"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".footer-social-link","originalId":"b53561ed-ef33-c078-0855-ff0573390154","appliesTo":"CLASS"},"targets":[{"selector":".footer-social-link","originalId":"b53561ed-ef33-c078-0855-ff0573390154","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":0,"direction":null,"effectIn":true},"createdOn":1750807999567},"e-513":{"id":"e-513","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-52","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-512"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".footer-social-link","originalId":"b53561ed-ef33-c078-0855-ff0573390154","appliesTo":"CLASS"},"targets":[{"selector":".footer-social-link","originalId":"b53561ed-ef33-c078-0855-ff0573390154","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1750807999570},"e-536":{"id":"e-536","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-537"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"96519532-1ed8-08ac-7016-2073dcbb72e3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"96519532-1ed8-08ac-7016-2073dcbb72e3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":300,"direction":"BOTTOM","effectIn":true},"createdOn":1757326299601},"e-570":{"id":"e-570","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-59","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-571"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"727127fa-85e3-4319-bc74-198ae5a34ad6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"727127fa-85e3-4319-bc74-198ae5a34ad6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1757844530777}},"actionLists":{"a-32":{"id":"a-32","title":"Footer Hover In","actionItemGroups":[{"actionItems":[{"id":"a-32-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".footer-link","selectorGuids":["2854979e-d122-0a35-3c77-2a1ea7ba10f4"]},"xValue":0,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-32-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".footer-link","selectorGuids":["2854979e-d122-0a35-3c77-2a1ea7ba10f4"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-32-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".footer-link","selectorGuids":["2854979e-d122-0a35-3c77-2a1ea7ba10f4"]},"xValue":0,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-32-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".footer-link","selectorGuids":["2854979e-d122-0a35-3c77-2a1ea7ba10f4"]},"yValue":-100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1745618210945},"a-33":{"id":"a-33","title":"Footer Hover Out","actionItemGroups":[{"actionItems":[{"id":"a-33-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".footer-link","selectorGuids":["2854979e-d122-0a35-3c77-2a1ea7ba10f4"]},"xValue":0,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-33-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".footer-link","selectorGuids":["2854979e-d122-0a35-3c77-2a1ea7ba10f4"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1745618210945},"a-51":{"id":"a-51","title":"Footer Social Hover In","actionItemGroups":[{"actionItems":[{"id":"a-51-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".footer-social-icon","selectorGuids":["a2245ed5-3fee-942d-a413-7686674768ba"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-51-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".footer-social-icon","selectorGuids":["a2245ed5-3fee-942d-a413-7686674768ba"]},"yValue":-100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1750808052530},"a-52":{"id":"a-52","title":"Footer Socia Hover Out","actionItemGroups":[{"actionItems":[{"id":"a-52-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".footer-social-icon","selectorGuids":["a2245ed5-3fee-942d-a413-7686674768ba"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1750808052530},"a-59":{"id":"a-59","title":"New Timed Animation","actionItemGroups":[{"actionItems":[{"id":"a-59-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".footer-link","selectorGuids":["2854979e-d122-0a35-3c77-2a1ea7ba10f4"]},"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1757844534771},"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Footer(
    {
        as: _Component = _Builtin.Section
    }
) {
    _interactions.useInteractions(_interactionsData);

    return (
        <_Component
            className="footer-section"
            grid={{
                type: "section"
            }}
            tag="section"><_Builtin.BlockContainer
                className="footer-container"
                grid={{
                    type: "container"
                }}
                tag="div"><_Builtin.Block className="footer-main-wrapper" tag="div"><_Builtin.Block className="footer-uper-section" tag="div"><_Builtin.Block className="section-title-wrap footer" tag="div"><_Builtin.Heading className="section-title-text" tag="h2">{"Let’s Build Something "}<_Builtin.Span className="section-title-gradient">{"Intelligent Together"}</_Builtin.Span></_Builtin.Heading><_Builtin.Paragraph className="section-title-short-text footer">{"From automation to innovation our cutting-edge AI solutions help businesses work smarter, move faster, and grow stronger."}</_Builtin.Paragraph><PrimaryButton /></_Builtin.Block></_Builtin.Block><_Builtin.Block className="footer-contect-wrapper" tag="div"><_Builtin.Block className="footer-brand-wrapper" tag="div"><_Builtin.Link
                                className="footer-brand-link"
                                data-w-id="75e8d627-ba75-caee-17aa-b33d0508d5a9"
                                button={false}
                                block="inline"
                                options={{
                                    href: "#"
                                }}><_Builtin.Image
                                    className="footer-brand-image"
                                    loading="lazy"
                                    width="auto"
                                    height="auto"
                                    alt=""
                                    src="https://cdn.prod.website-files.com/691966a97522cf30142cebf7/691966aa7522cf30142cecb4_Ganify..svg" /></_Builtin.Link><_Builtin.Paragraph
                                className="footer-brand-text"
                                data-w-id="b53561ed-ef33-c078-0855-ff0573390119">{"Built for forward-thinking teams. Powered by ethical AI."}</_Builtin.Paragraph><_Builtin.Block className="footer-brand-mail-wrap" tag="div"><_Builtin.Heading
                                    className="footer-brand-mail-title"
                                    data-w-id="b53561ed-ef33-c078-0855-ff057339011c"
                                    tag="h4">{"Newsletter"}</_Builtin.Heading><_Builtin.FormWrapper className="form-block"><_Builtin.FormForm
                                        className="form"
                                        data-w-id="b53561ed-ef33-c078-0855-ff057339011f"
                                        name="email-form"
                                        data-name="Email Form"
                                        method="get"
                                        id="email-form"><_Builtin.FormTextInput
                                            className="mail-text-field"
                                            autoFocus={false}
                                            maxLength={256}
                                            name="email-2"
                                            data-name="Email 2"
                                            placeholder="Email"
                                            type="email"
                                            disabled={false}
                                            required={true}
                                            id="email-2" /><_Builtin.FormButton
                                            className="submit-button"
                                            type="submit"
                                            value="Subscribe"
                                            data-wait="Please wait..." /></_Builtin.FormForm><_Builtin.FormSuccessMessage className="success-message-wrap"><_Builtin.Block tag="div">{"Thank you! Your submission has been received!"}</_Builtin.Block></_Builtin.FormSuccessMessage><_Builtin.FormErrorMessage className="error-message"><_Builtin.Block tag="div">{"Oops! Something went wrong while submitting the form."}</_Builtin.Block></_Builtin.FormErrorMessage></_Builtin.FormWrapper></_Builtin.Block></_Builtin.Block><_Builtin.Block className="footer-main-menu-wrapper" tag="div"><_Builtin.Block className="footer-content" tag="div"><_Builtin.Block
                                    className="footer-block"
                                    id="w-node-b53561ed-ef33-c078-0855-ff057339012a-73390106"
                                    tag="div"><_Builtin.Block className="title-small" tag="div">{"Pages"}</_Builtin.Block><_Builtin.Block className="footer-block-menu" tag="div"><_Builtin.Block className="footer-link-wrapper" tag="div"><_Builtin.Link
                                                className="footer-link"
                                                button={false}
                                                block=""
                                                options={{
                                                    href: "#"
                                                }}>{"Home"}</_Builtin.Link><_Builtin.Link
                                                className="footer-link"
                                                button={false}
                                                block=""
                                                options={{
                                                    href: "#"
                                                }}>{"Home"}</_Builtin.Link></_Builtin.Block><_Builtin.Block className="footer-link-wrapper" tag="div"><_Builtin.Link
                                                className="footer-link"
                                                button={false}
                                                block=""
                                                options={{
                                                    href: "#"
                                                }}>{"About"}</_Builtin.Link><_Builtin.Link
                                                className="footer-link"
                                                button={false}
                                                block=""
                                                options={{
                                                    href: "#"
                                                }}>{"About"}</_Builtin.Link></_Builtin.Block><_Builtin.Block className="footer-link-wrapper" tag="div"><_Builtin.Link
                                                className="footer-link"
                                                button={false}
                                                block=""
                                                options={{
                                                    href: "#"
                                                }}>{"Features"}</_Builtin.Link><_Builtin.Link
                                                className="footer-link"
                                                button={false}
                                                block=""
                                                options={{
                                                    href: "#"
                                                }}>{"Features"}</_Builtin.Link></_Builtin.Block><_Builtin.Block className="footer-link-wrapper" tag="div"><_Builtin.Link
                                                className="footer-link"
                                                button={false}
                                                block=""
                                                options={{
                                                    href: "#"
                                                }}>{"Blog"}</_Builtin.Link><_Builtin.Link
                                                className="footer-link"
                                                button={false}
                                                block=""
                                                options={{
                                                    href: "#"
                                                }}>{"Blog"}</_Builtin.Link></_Builtin.Block><_Builtin.Block className="footer-link-wrapper" tag="div"><_Builtin.Link
                                                className="footer-link"
                                                button={false}
                                                block=""
                                                options={{
                                                    href: "#"
                                                }}>{"Pricing"}</_Builtin.Link><_Builtin.Link
                                                className="footer-link"
                                                button={false}
                                                block=""
                                                options={{
                                                    href: "#"
                                                }}>{"Pricing"}</_Builtin.Link></_Builtin.Block></_Builtin.Block></_Builtin.Block><_Builtin.Block
                                    className="footer-block"
                                    id="w-node-b53561ed-ef33-c078-0855-ff0573390138-73390106"
                                    tag="div"><_Builtin.Block className="title-small" tag="div">{"Inner Pages"}</_Builtin.Block><_Builtin.Block className="footer-block-menu" tag="div"><_Builtin.Block className="footer-link-wrapper" tag="div"><_Builtin.Link
                                                className="footer-link"
                                                data-w-id="727127fa-85e3-4319-bc74-198ae5a34ad6"
                                                button={false}
                                                block=""
                                                options={{
                                                    href: "#"
                                                }}>{"Blog Single"}</_Builtin.Link><_Builtin.Link
                                                className="footer-link"
                                                button={false}
                                                block=""
                                                options={{
                                                    href: "#"
                                                }}>{"Blog Single"}</_Builtin.Link></_Builtin.Block><_Builtin.Block className="footer-link-wrapper" tag="div"><_Builtin.Link
                                                className="footer-link"
                                                button={false}
                                                block=""
                                                options={{
                                                    href: "#"
                                                }}>{"Pricing Single"}</_Builtin.Link><_Builtin.Link
                                                className="footer-link"
                                                button={false}
                                                block=""
                                                options={{
                                                    href: "#"
                                                }}>{"Pricing Single"}</_Builtin.Link></_Builtin.Block><_Builtin.Block className="footer-link-wrapper" tag="div"><_Builtin.Link
                                                className="footer-link"
                                                button={false}
                                                block=""
                                                options={{
                                                    href: "#"
                                                }}>{"Contact"}</_Builtin.Link><_Builtin.Link
                                                className="footer-link"
                                                button={false}
                                                block=""
                                                options={{
                                                    href: "#"
                                                }}>{"Contact"}</_Builtin.Link></_Builtin.Block><_Builtin.Block className="footer-link-wrapper" tag="div"><_Builtin.Link
                                                className="footer-link"
                                                button={false}
                                                block=""
                                                options={{
                                                    href: "#"
                                                }}>{"404"}</_Builtin.Link><_Builtin.Link
                                                className="footer-link"
                                                button={false}
                                                block=""
                                                options={{
                                                    href: "#"
                                                }}>{"404"}</_Builtin.Link></_Builtin.Block></_Builtin.Block></_Builtin.Block><_Builtin.Block
                                    className="footer-block"
                                    id="w-node-b53561ed-ef33-c078-0855-ff0573390144-73390106"
                                    tag="div"><_Builtin.Block className="title-small" tag="div">{"Utility"}</_Builtin.Block><_Builtin.Block className="footer-block-menu" tag="div"><_Builtin.Block className="footer-link-wrapper" tag="div"><_Builtin.Link
                                                className="footer-link"
                                                button={false}
                                                block=""
                                                options={{
                                                    href: "#"
                                                }}>{"Style Guide"}</_Builtin.Link><_Builtin.Link
                                                className="footer-link"
                                                button={false}
                                                block=""
                                                options={{
                                                    href: "#"
                                                }}>{"Style Guide"}</_Builtin.Link></_Builtin.Block><_Builtin.Block className="footer-link-wrapper" tag="div"><_Builtin.Link
                                                className="footer-link"
                                                button={false}
                                                block=""
                                                options={{
                                                    href: "#"
                                                }}>{"Password"}</_Builtin.Link><_Builtin.Link
                                                className="footer-link"
                                                button={false}
                                                block=""
                                                options={{
                                                    href: "#"
                                                }}>{"Password"}</_Builtin.Link></_Builtin.Block><_Builtin.Block className="footer-link-wrapper" tag="div"><_Builtin.Link
                                                className="footer-link"
                                                button={false}
                                                block=""
                                                options={{
                                                    href: "#"
                                                }}>{"Change Log"}</_Builtin.Link><_Builtin.Link
                                                className="footer-link"
                                                button={false}
                                                block=""
                                                options={{
                                                    href: "#"
                                                }}>{"Change Log"}</_Builtin.Link></_Builtin.Block><_Builtin.Block className="footer-link-wrapper" tag="div"><_Builtin.Link
                                                className="footer-link"
                                                button={false}
                                                block=""
                                                options={{
                                                    href: "#"
                                                }}>{"License"}</_Builtin.Link><_Builtin.Link
                                                className="footer-link"
                                                button={false}
                                                block=""
                                                options={{
                                                    href: "#"
                                                }}>{"License"}</_Builtin.Link></_Builtin.Block></_Builtin.Block></_Builtin.Block><_Builtin.Block className="footer-block-menu social" tag="div"><_Builtin.Block className="social-mail-wrap" tag="div"><_Builtin.Block
                                            className="footer-link title"
                                            data-w-id="b53561ed-ef33-c078-0855-ff0573390151"
                                            tag="div">{"Social Media"}</_Builtin.Block><_Builtin.Block className="footer-social-wrapper" tag="div"><_Builtin.Link
                                                className="footer-social-link"
                                                button={false}
                                                block="inline"
                                                options={{
                                                    href: "https://www.facebook.com"
                                                }}><_Builtin.Image
                                                    className="footer-social-icon"
                                                    loading="lazy"
                                                    width="auto"
                                                    height="auto"
                                                    alt=""
                                                    src="https://cdn.prod.website-files.com/691966a97522cf30142cebf7/691966aa7522cf30142cecb5_facebook.svg" /><_Builtin.Image
                                                    className="footer-social-icon"
                                                    loading="lazy"
                                                    width="auto"
                                                    height="auto"
                                                    alt=""
                                                    src="https://cdn.prod.website-files.com/691966a97522cf30142cebf7/691966aa7522cf30142ced94_Genify%20Footer%20Icon.svg" /></_Builtin.Link><_Builtin.Link
                                                className="footer-social-link"
                                                button={false}
                                                block="inline"
                                                options={{
                                                    href: "https://www.linkedin.com"
                                                }}><_Builtin.Image
                                                    className="footer-social-icon"
                                                    loading="lazy"
                                                    width="auto"
                                                    height="auto"
                                                    alt=""
                                                    src="https://cdn.prod.website-files.com/691966a97522cf30142cebf7/691966aa7522cf30142cecb9_linked.svg" /><_Builtin.Image
                                                    className="footer-social-icon"
                                                    loading="lazy"
                                                    width="auto"
                                                    height="auto"
                                                    alt=""
                                                    src="https://cdn.prod.website-files.com/691966a97522cf30142cebf7/691966aa7522cf30142ced91_Genify%20Footer%20Icon%202.svg" /></_Builtin.Link><_Builtin.Link
                                                className="footer-social-link"
                                                button={false}
                                                block="inline"
                                                options={{
                                                    href: "https://www.instagram.com"
                                                }}><_Builtin.Image
                                                    className="footer-social-icon"
                                                    loading="lazy"
                                                    width="auto"
                                                    height="auto"
                                                    alt=""
                                                    src="https://cdn.prod.website-files.com/691966a97522cf30142cebf7/691966aa7522cf30142cecb8_Socials.svg" /><_Builtin.Image
                                                    className="footer-social-icon"
                                                    loading="lazy"
                                                    width="auto"
                                                    height="auto"
                                                    alt=""
                                                    src="https://cdn.prod.website-files.com/691966a97522cf30142cebf7/691966aa7522cf30142ced93_%20Genify%20Footer%20Icon%203.svg" /></_Builtin.Link><_Builtin.Link
                                                className="footer-social-link"
                                                button={false}
                                                block="inline"
                                                options={{
                                                    href: "http://behance.net"
                                                }}><_Builtin.Image
                                                    className="footer-social-icon"
                                                    loading="lazy"
                                                    width="auto"
                                                    height="auto"
                                                    alt=""
                                                    src="https://cdn.prod.website-files.com/691966a97522cf30142cebf7/691966aa7522cf30142cecb7_behance.svg" /><_Builtin.Image
                                                    className="footer-social-icon"
                                                    loading="lazy"
                                                    width="auto"
                                                    height="auto"
                                                    alt=""
                                                    src="https://cdn.prod.website-files.com/691966a97522cf30142cebf7/691966aa7522cf30142ced92_Genify%20Footer%20Icon%204.svg" /></_Builtin.Link><_Builtin.Link
                                                className="footer-social-link"
                                                button={false}
                                                block="inline"
                                                options={{
                                                    href: "https://dribbble.com"
                                                }}><_Builtin.Image
                                                    className="footer-social-icon"
                                                    loading="lazy"
                                                    width="auto"
                                                    height="auto"
                                                    alt=""
                                                    src="https://cdn.prod.website-files.com/691966a97522cf30142cebf7/691966aa7522cf30142cecb6_dribble.svg" /><_Builtin.Image
                                                    className="footer-social-icon"
                                                    loading="lazy"
                                                    width="auto"
                                                    height="auto"
                                                    alt=""
                                                    src="https://cdn.prod.website-files.com/691966a97522cf30142cebf7/691966aa7522cf30142ced95_Genify%20Footer%20Icon%205.svg" /></_Builtin.Link></_Builtin.Block></_Builtin.Block><_Builtin.Block className="social-mail-wrap" tag="div"><_Builtin.Block
                                            className="footer-link title"
                                            data-w-id="6b0fa589-7198-4e87-1a57-34795d32be68"
                                            tag="div">{"Email"}</_Builtin.Block><_Builtin.Link
                                            className="social-mail"
                                            data-w-id="96519532-1ed8-08ac-7016-2073dcbb72e3"
                                            button={false}
                                            block=""
                                            options={{
                                                href: "mailto:support@onixtheme.com?subject=Genify%20Template"
                                            }}>{"support@onixtheme.com"}</_Builtin.Link></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.Block><_Builtin.Block className="footer-copyright" tag="div"><_Builtin.Block
                            className="footer-copyright-divider"
                            data-w-id="e840afa3-c438-97d0-2c3f-c83a8b17b99d"
                            tag="div" /><_Builtin.Block
                            className="footer-copy-right-text"
                            data-w-id="29af7eaf-68a4-b74a-f175-ca3700932c7b"
                            tag="div">{"© Copyright 2025 | Design & Developed By "}<_Builtin.Link
                                className="site-link"
                                button={false}
                                block=""
                                options={{
                                    href: "#",
                                    target: "_blank"
                                }}>{"Onixtheme"}</_Builtin.Link>{" - "}<_Builtin.Link
                                className="site-link"
                                button={false}
                                block=""
                                options={{
                                    href: "#"
                                }}>{"License"}</_Builtin.Link>{" | Powered By "}<_Builtin.Link
                                className="site-link"
                                button={false}
                                block=""
                                options={{
                                    href: "#",
                                    target: "_blank"
                                }}>{"Webflow"}</_Builtin.Link></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.BlockContainer></_Component>
    );
}