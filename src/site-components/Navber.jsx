"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
    '{"events":{"e-40":{"id":"e-40","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-111"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"691966aa7522cf30142cecfe|81cc84de-d489-2c64-53dc-1a14dfc89cbb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"691966aa7522cf30142cecfe|81cc84de-d489-2c64-53dc-1a14dfc89cbb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1737971978208},"e-35":{"id":"e-35","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-85"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"691966aa7522cf30142cecfe|81cc84de-d489-2c64-53dc-1a14dfc89cbb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"691966aa7522cf30142cecfe|81cc84de-d489-2c64-53dc-1a14dfc89cbb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1737971978211},"e-71":{"id":"e-71","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-85"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"691966aa7522cf30142ced00|43ccea57-d082-0aeb-c11f-8df0340159fe","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"691966aa7522cf30142ced00|43ccea57-d082-0aeb-c11f-8df0340159fe","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1748601438261},"e-72":{"id":"e-72","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-71"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"691966aa7522cf30142ced00|43ccea57-d082-0aeb-c11f-8df0340159fe","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"691966aa7522cf30142ced00|43ccea57-d082-0aeb-c11f-8df0340159fe","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1748601438261},"e-85":{"id":"e-85","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-9","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-86"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".lottie-animation","originalId":"67fb4d1d22fccf6fdd46087f|ee6e0c80-f2c6-7b27-1970-5447a1d0826b","appliesTo":"CLASS"},"targets":[{"selector":".lottie-animation","originalId":"67fb4d1d22fccf6fdd46087f|ee6e0c80-f2c6-7b27-1970-5447a1d0826b","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1745874193916},"e-86":{"id":"e-86","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-10","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-85"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".lottie-animation","originalId":"67fb4d1d22fccf6fdd46087f|ee6e0c80-f2c6-7b27-1970-5447a1d0826b","appliesTo":"CLASS"},"targets":[{"selector":".lottie-animation","originalId":"67fb4d1d22fccf6fdd46087f|ee6e0c80-f2c6-7b27-1970-5447a1d0826b","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1745874193916},"e-87":{"id":"e-87","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-5","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-88"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"99054b94-c8c9-46d4-be84-b5c0369194c4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"99054b94-c8c9-46d4-be84-b5c0369194c4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1748638738805},"e-88":{"id":"e-88","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-34","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-384"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"99054b94-c8c9-46d4-be84-b5c0369194c4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"99054b94-c8c9-46d4-be84-b5c0369194c4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1748638738805},"e-439":{"id":"e-439","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-440"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"691966aa7522cf30142ced02|f0b6dc5f-3299-3dd5-bb07-fcacdcc2994a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"691966aa7522cf30142ced02|f0b6dc5f-3299-3dd5-bb07-fcacdcc2994a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1748825314899},"e-440":{"id":"e-440","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-439"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"691966aa7522cf30142ced02|f0b6dc5f-3299-3dd5-bb07-fcacdcc2994a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"691966aa7522cf30142ced02|f0b6dc5f-3299-3dd5-bb07-fcacdcc2994a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1748825314899},"e-441":{"id":"e-441","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-442"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"2f767aec-e156-5550-f61c-d37d8bc3f91b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2f767aec-e156-5550-f61c-d37d8bc3f91b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1748825722120},"e-442":{"id":"e-442","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-441"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"2f767aec-e156-5550-f61c-d37d8bc3f91b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2f767aec-e156-5550-f61c-d37d8bc3f91b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1748825722120},"e-449":{"id":"e-449","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-450"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"691966aa7522cf30142ced03|b248cc07-9a4c-361c-5259-b2a2499e4a6a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"691966aa7522cf30142ced03|b248cc07-9a4c-361c-5259-b2a2499e4a6a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1748902389574},"e-450":{"id":"e-450","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-449"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"691966aa7522cf30142ced03|b248cc07-9a4c-361c-5259-b2a2499e4a6a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"691966aa7522cf30142ced03|b248cc07-9a4c-361c-5259-b2a2499e4a6a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1748902389574},"e-489":{"id":"e-489","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-490"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"691966aa7522cf30142cecfb|2d49aead-8a21-33a5-ce6f-051598f194fd","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"691966aa7522cf30142cecfb|2d49aead-8a21-33a5-ce6f-051598f194fd","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1748909834583},"e-490":{"id":"e-490","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-489"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"691966aa7522cf30142cecfb|2d49aead-8a21-33a5-ce6f-051598f194fd","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"691966aa7522cf30142cecfb|2d49aead-8a21-33a5-ce6f-051598f194fd","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1748909834588},"e-491":{"id":"e-491","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-492"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"691966aa7522cf30142cecfb|3475c5af-34e5-4241-34f6-b9bcbc49717a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"691966aa7522cf30142cecfb|3475c5af-34e5-4241-34f6-b9bcbc49717a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1748909849089},"e-492":{"id":"e-492","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-491"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"691966aa7522cf30142cecfb|3475c5af-34e5-4241-34f6-b9bcbc49717a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"691966aa7522cf30142cecfb|3475c5af-34e5-4241-34f6-b9bcbc49717a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1748909849091},"e-493":{"id":"e-493","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-494"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"691966aa7522cf30142cecfb|835c36ca-e353-6a8d-b718-b0e57a7cc858","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"691966aa7522cf30142cecfb|835c36ca-e353-6a8d-b718-b0e57a7cc858","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1748909913783},"e-494":{"id":"e-494","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-493"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"691966aa7522cf30142cecfb|835c36ca-e353-6a8d-b718-b0e57a7cc858","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"691966aa7522cf30142cecfb|835c36ca-e353-6a8d-b718-b0e57a7cc858","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1748909913786},"e-501":{"id":"e-501","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-502"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".font-button-wrap","originalId":"691966aa7522cf30142cecae|3b1292c9-8b29-d721-a2d3-3d71213a81b7","appliesTo":"CLASS"},"targets":[{"selector":".font-button-wrap","originalId":"691966aa7522cf30142cecae|3b1292c9-8b29-d721-a2d3-3d71213a81b7","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1748935949111},"e-502":{"id":"e-502","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-501"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".font-button-wrap","originalId":"691966aa7522cf30142cecae|3b1292c9-8b29-d721-a2d3-3d71213a81b7","appliesTo":"CLASS"},"targets":[{"selector":".font-button-wrap","originalId":"691966aa7522cf30142cecae|3b1292c9-8b29-d721-a2d3-3d71213a81b7","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1748935949115},"e-516":{"id":"e-516","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-517"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"691966aa7522cf30142ced17|d4bd5b70-8a1a-3e24-a6e7-d272b1c9008d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"691966aa7522cf30142ced17|d4bd5b70-8a1a-3e24-a6e7-d272b1c9008d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1752403508692},"e-517":{"id":"e-517","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-516"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"691966aa7522cf30142ced17|d4bd5b70-8a1a-3e24-a6e7-d272b1c9008d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"691966aa7522cf30142ced17|d4bd5b70-8a1a-3e24-a6e7-d272b1c9008d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1752403508692}},"actionLists":{"a":{"id":"a","title":"Font Button Hover In","actionItemGroups":[{"actionItems":[{"id":"a-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".font-button-text","selectorGuids":["84ce35df-7ea2-f867-4fe5-925f2d2a1616"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".font-icon","selectorGuids":["84ce35df-7ea2-f867-4fe5-925f2d2a163c"]},"xValue":0,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"id":"a-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".font-button-text","selectorGuids":["84ce35df-7ea2-f867-4fe5-925f2d2a1616"]},"yValue":-100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".font-icon","selectorGuids":["84ce35df-7ea2-f867-4fe5-925f2d2a163c"]},"xValue":112,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1737971982026},"a-2":{"id":"a-2","title":"Font Button Hover Out","actionItemGroups":[{"actionItems":[{"id":"a-2-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".font-button-text","selectorGuids":["84ce35df-7ea2-f867-4fe5-925f2d2a1616"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-2-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".font-icon","selectorGuids":["84ce35df-7ea2-f867-4fe5-925f2d2a163c"]},"xValue":0,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1737971982026},"a-9":{"id":"a-9","title":"Menu Button In","actionItemGroups":[{"actionItems":[{"id":"a-9-n","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"f2e22276-09fc-32b8-a210-a5c7044109ca"},"value":0}},{"id":"a-9-n-2","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".lottie-animation","selectorGuids":["badc1fec-157e-a3ff-303d-a7e22af6d1a2"]},"value":0}}]},{"actionItems":[{"id":"a-9-n-3","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"f2e22276-09fc-32b8-a210-a5c7044109ca"},"value":50}},{"id":"a-9-n-4","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".lottie-animation","selectorGuids":["badc1fec-157e-a3ff-303d-a7e22af6d1a2"]},"value":50}}]}],"useFirstGroupAsInitialState":true,"createdOn":1733432722625},"a-10":{"id":"a-10","title":"Menu Button Close","actionItemGroups":[{"actionItems":[{"id":"a-10-n","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"f2e22276-09fc-32b8-a210-a5c7044109ca"},"value":0}}]}],"useFirstGroupAsInitialState":false,"createdOn":1733432722625},"a-5":{"id":"a-5","title":"DropDown Open","actionItemGroups":[{"actionItems":[{"id":"a-5-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".icon","selectorGuids":["c0bfc44f-8f86-cd8d-f4e2-7cb6d09b9260"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-5-n-8","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".icon","selectorGuids":["c0bfc44f-8f86-cd8d-f4e2-7cb6d09b9260"]},"globalSwatchId":"--white-color","rValue":185,"bValue":187,"gValue":183,"aValue":1}},{"id":"a-5-n-7","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".nav-link._2","selectorGuids":["badc1fec-157e-a3ff-303d-a7e22af6d191","badc1fec-157e-a3ff-303d-a7e22af6d1b6"]},"globalSwatchId":"--white-color","rValue":185,"bValue":187,"gValue":183,"aValue":1}},{"id":"a-5-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-list","selectorGuids":["badc1fec-157e-a3ff-303d-a7e22af6d18e"]},"value":0,"unit":""}},{"id":"a-5-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-list","selectorGuids":["badc1fec-157e-a3ff-303d-a7e22af6d18e"]},"yValue":50,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]},{"actionItems":[{"id":"a-5-n-9","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".icon","selectorGuids":["c0bfc44f-8f86-cd8d-f4e2-7cb6d09b9260"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-5-n-13","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-list","selectorGuids":["badc1fec-157e-a3ff-303d-a7e22af6d18e"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-5-n-12","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-list","selectorGuids":["badc1fec-157e-a3ff-303d-a7e22af6d18e"]},"value":1,"unit":""}},{"id":"a-5-n-11","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".nav-link._2","selectorGuids":["badc1fec-157e-a3ff-303d-a7e22af6d191","badc1fec-157e-a3ff-303d-a7e22af6d1b6"]},"globalSwatchId":"--ambar-color","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-5-n-10","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".icon","selectorGuids":["c0bfc44f-8f86-cd8d-f4e2-7cb6d09b9260"]},"globalSwatchId":"--ambar-color","rValue":255,"bValue":255,"gValue":255,"aValue":1}}]}],"useFirstGroupAsInitialState":true,"createdOn":1735268166440},"a-34":{"id":"a-34","title":"DropDown Close","actionItemGroups":[{"actionItems":[{"id":"a-34-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-list","selectorGuids":["badc1fec-157e-a3ff-303d-a7e22af6d18e"]},"yValue":50,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-34-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-list","selectorGuids":["badc1fec-157e-a3ff-303d-a7e22af6d18e"]},"value":0,"unit":""}},{"id":"a-34-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".icon","selectorGuids":["c0bfc44f-8f86-cd8d-f4e2-7cb6d09b9260"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-34-n-2","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".icon","selectorGuids":["c0bfc44f-8f86-cd8d-f4e2-7cb6d09b9260"]},"globalSwatchId":"--white-color","rValue":185,"bValue":187,"gValue":183,"aValue":1}},{"id":"a-34-n-3","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".nav-link._2","selectorGuids":["badc1fec-157e-a3ff-303d-a7e22af6d191","badc1fec-157e-a3ff-303d-a7e22af6d1b6"]},"globalSwatchId":"--white-color","rValue":185,"bValue":187,"gValue":183,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1735268166440}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Navber(
    {
        as: _Component = _Builtin.NavbarWrapper
    }
) {
    _interactions.useInteractions(_interactionsData);

    return (
        <_Component
            className="navbar"
            tag="div"
            config={{
                easing: "ease",
                easing2: "ease",
                duration: 400,
                docHeight: false,
                noScroll: false,
                animation: "default",
                collapse: "medium"
            }}><_Builtin.Block className="container" tag="div"><_Builtin.Block className="navbar-wrapper" tag="div"><_Builtin.NavbarBrand
                        className="navbar-brand"
                        options={{
                            href: "#"
                        }}><_Builtin.Image
                            className="navbar-brand-logo"
                            width="auto"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/691966a97522cf30142cebf7/6919674e9061c2bb21f4fc49_Logo-Horizontal.png" /></_Builtin.NavbarBrand><_Builtin.NavbarMenu className="nav-menu-wrapper" tag="nav" role="navigation"><_Builtin.Block className="main-menu-wrapper" tag="div"><_Builtin.Block className="dropdown-title" tag="div"><_Builtin.Block className="dropdown-menu-title-text" tag="div">{"Pages"}</_Builtin.Block></_Builtin.Block><_Builtin.Block className="menu-wrap" tag="div"><_Builtin.Block className="manu-list-wrapper" tag="div"><_Builtin.Link
                                        className="nav-link _2"
                                        button={false}
                                        block=""
                                        options={{
                                            href: "#"
                                        }}>{"Home"}</_Builtin.Link><_Builtin.Link
                                        className="nav-link _2"
                                        button={false}
                                        block=""
                                        options={{
                                            href: "#"
                                        }}>{"Features"}</_Builtin.Link><_Builtin.Link
                                        className="nav-link _2"
                                        button={false}
                                        block=""
                                        options={{
                                            href: "#"
                                        }}>{"About"}</_Builtin.Link><_Builtin.DropdownWrapper
                                        className="dropdown"
                                        data-w-id="99054b94-c8c9-46d4-be84-b5c0369194c4"
                                        tag="div"
                                        delay={0}
                                        hover={true}><_Builtin.DropdownToggle className="dropdown-toggle" tag="div"><_Builtin.Block className="nav-link _2" tag="div">{"Pages"}</_Builtin.Block><_Builtin.Icon
                                                className="icon"
                                                widget={{
                                                    type: "icon",
                                                    icon: "dropdown-toggle"
                                                }} /></_Builtin.DropdownToggle><_Builtin.DropdownList className="dropdown-list" tag="nav"><_Builtin.Block className="drop-down" tag="div"><_Builtin.Block className="dropdown-wrapper" tag="div"><_Builtin.Block className="drop-down-grid" tag="div"><_Builtin.Block className="drop-down-menu-wrapper" tag="div"><_Builtin.Block className="drop-down-div" tag="div" /><_Builtin.Block className="drop-down-menu-wrap" tag="div"><_Builtin.Block className="drop-down-menu-title" tag="div">{"Pages"}</_Builtin.Block><_Builtin.Block className="dropdown-menu-list-wrapper" tag="div"><_Builtin.Link
                                                                        className="dropdown-menu-link"
                                                                        button={false}
                                                                        block=""
                                                                        options={{
                                                                            href: "#"
                                                                        }}>{"Home"}</_Builtin.Link><_Builtin.Link
                                                                        className="dropdown-menu-link"
                                                                        button={false}
                                                                        block=""
                                                                        options={{
                                                                            href: "#"
                                                                        }}>{"About"}</_Builtin.Link><_Builtin.Link
                                                                        className="dropdown-menu-link"
                                                                        button={false}
                                                                        block=""
                                                                        options={{
                                                                            href: "#"
                                                                        }}>{"Features"}</_Builtin.Link><_Builtin.Link
                                                                        className="dropdown-menu-link"
                                                                        button={false}
                                                                        block=""
                                                                        options={{
                                                                            href: "#"
                                                                        }}>{"Blog"}</_Builtin.Link><_Builtin.Link
                                                                        className="dropdown-menu-link"
                                                                        button={false}
                                                                        block=""
                                                                        options={{
                                                                            href: "#"
                                                                        }}>{"Pricing"}</_Builtin.Link></_Builtin.Block></_Builtin.Block><_Builtin.Block className="drop-down-menu-wrap" tag="div"><_Builtin.Block className="drop-down-menu-title" tag="div">{"Inner Pages"}</_Builtin.Block><_Builtin.Block className="dropdown-menu-list-wrapper" tag="div"><_Builtin.Link
                                                                        className="dropdown-menu-link"
                                                                        button={false}
                                                                        block=""
                                                                        options={{
                                                                            href: "https://ganify.webflow.io/blog/real-world-success-stories-and-applications"
                                                                        }}>{"Blog Single"}</_Builtin.Link><_Builtin.Link
                                                                        className="dropdown-menu-link"
                                                                        button={false}
                                                                        block=""
                                                                        options={{
                                                                            href: "https://ganify.webflow.io/product/starter"
                                                                        }}>{"Pricing Single"}</_Builtin.Link><_Builtin.Link
                                                                        className="dropdown-menu-link"
                                                                        button={false}
                                                                        block=""
                                                                        options={{
                                                                            href: "#"
                                                                        }}>{"Contact"}</_Builtin.Link><_Builtin.Link
                                                                        className="dropdown-menu-link"
                                                                        button={false}
                                                                        block=""
                                                                        options={{
                                                                            href: "#"
                                                                        }}>{"Error"}</_Builtin.Link></_Builtin.Block></_Builtin.Block></_Builtin.Block><_Builtin.Block className="drop-down-menu-wrap _3" tag="div"><_Builtin.Block className="drop-down-menu-title" tag="div">{"Utility pages"}</_Builtin.Block><_Builtin.Block className="dropdown-menu-list-wrapper _3" tag="div"><_Builtin.Link
                                                                    className="dropdown-menu-link"
                                                                    button={false}
                                                                    block=""
                                                                    options={{
                                                                        href: "#"
                                                                    }}>{"Style Guide"}</_Builtin.Link><_Builtin.Link
                                                                    className="dropdown-menu-link"
                                                                    button={false}
                                                                    block=""
                                                                    options={{
                                                                        href: "#"
                                                                    }}>{"Pass Protected"}</_Builtin.Link><_Builtin.Link
                                                                    className="dropdown-menu-link"
                                                                    button={false}
                                                                    block=""
                                                                    options={{
                                                                        href: "#"
                                                                    }}>{"License"}</_Builtin.Link><_Builtin.Link
                                                                    className="dropdown-menu-link"
                                                                    button={false}
                                                                    block=""
                                                                    options={{
                                                                        href: "#"
                                                                    }}>{"Change log"}</_Builtin.Link></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.DropdownList></_Builtin.DropdownWrapper><_Builtin.Link
                                        className="nav-link _2"
                                        button={false}
                                        block=""
                                        options={{
                                            href: "#"
                                        }}>{"Blog"}</_Builtin.Link><_Builtin.Link
                                        className="nav-link _2 _3"
                                        button={false}
                                        block=""
                                        options={{
                                            href: "#"
                                        }}>{"Pricing"}</_Builtin.Link></_Builtin.Block><_Builtin.Block className="manu-list-wrapper _1" tag="div"><_Builtin.Link
                                        className="nav-link"
                                        button={false}
                                        block=""
                                        options={{
                                            href: "https://ganify-ai.webflow.io/blog/real-world-success-stories-and-applications"
                                        }}>{"Blog Single"}</_Builtin.Link><_Builtin.Link
                                        className="nav-link"
                                        button={false}
                                        block=""
                                        options={{
                                            href: "https://ganify-ai.webflow.io/product/starter"
                                        }}>{"Pricing Single"}</_Builtin.Link><_Builtin.Link
                                        className="nav-link"
                                        button={false}
                                        block=""
                                        options={{
                                            href: "#"
                                        }}>{"Contact"}</_Builtin.Link><_Builtin.DropdownWrapper className="dropdown" tag="div" delay={0} hover={false}><_Builtin.DropdownToggle className="dropdown-toggle" tag="div"><_Builtin.Block className="nav-link" tag="div">{"Pages"}</_Builtin.Block><_Builtin.Icon
                                                className="dropdown-icon"
                                                widget={{
                                                    type: "icon",
                                                    icon: "dropdown-toggle"
                                                }} /></_Builtin.DropdownToggle><_Builtin.DropdownList className="dropdown-list" tag="nav"><_Builtin.Block className="dropdown-boarder" tag="div" /><_Builtin.Block className="dropdown-wrapper" tag="div"><_Builtin.Block className="drop-down-menu-wrapper" tag="div"><_Builtin.Block className="dropdown-main-menu-list-wrapper" tag="div"><_Builtin.Block className="dropdown-menu-title" tag="div">{"Pages"}</_Builtin.Block><_Builtin.Block className="dropdown-menu-list-wrapper" tag="div"><_Builtin.Link
                                                                className="dropdown-menu-link"
                                                                button={false}
                                                                block=""
                                                                options={{
                                                                    href: "#"
                                                                }}>{"Home"}</_Builtin.Link><_Builtin.Link
                                                                className="dropdown-menu-link"
                                                                button={false}
                                                                block=""
                                                                options={{
                                                                    href: "#"
                                                                }}>{"About"}</_Builtin.Link><_Builtin.Link
                                                                className="dropdown-menu-link"
                                                                button={false}
                                                                block=""
                                                                options={{
                                                                    href: "#"
                                                                }}>{"Services"}</_Builtin.Link><_Builtin.Link
                                                                className="dropdown-menu-link"
                                                                button={false}
                                                                block=""
                                                                options={{
                                                                    href: "#"
                                                                }}>{"Projects"}</_Builtin.Link><_Builtin.Link
                                                                className="dropdown-menu-link"
                                                                button={false}
                                                                block=""
                                                                options={{
                                                                    href: "#"
                                                                }}>{"Pricing"}</_Builtin.Link><_Builtin.Link
                                                                className="dropdown-menu-link"
                                                                button={false}
                                                                block=""
                                                                options={{
                                                                    href: "#"
                                                                }}>{"Blog"}</_Builtin.Link></_Builtin.Block></_Builtin.Block><_Builtin.Block className="dropdown-main-menu-list-wrapper" tag="div"><_Builtin.Block className="dropdown-menu-title" tag="div">{"Inner Pages"}</_Builtin.Block><_Builtin.Block className="dropdown-menu-list-wrapper" tag="div"><_Builtin.Link
                                                                className="dropdown-menu-link"
                                                                button={false}
                                                                block=""
                                                                options={{
                                                                    href: "#"
                                                                }}>{"Project Single"}</_Builtin.Link><_Builtin.Link
                                                                className="dropdown-menu-link"
                                                                button={false}
                                                                block=""
                                                                options={{
                                                                    href: "#"
                                                                }}>{"Services Single"}</_Builtin.Link><_Builtin.Link
                                                                className="dropdown-menu-link"
                                                                button={false}
                                                                block=""
                                                                options={{
                                                                    href: "#"
                                                                }}>{"Blog Single"}</_Builtin.Link><_Builtin.Link
                                                                className="dropdown-menu-link"
                                                                button={false}
                                                                block=""
                                                                options={{
                                                                    href: "#"
                                                                }}>{"Pricing Single"}</_Builtin.Link><_Builtin.Link
                                                                className="dropdown-menu-link"
                                                                button={false}
                                                                block=""
                                                                options={{
                                                                    href: "#"
                                                                }}>{"Contact"}</_Builtin.Link></_Builtin.Block></_Builtin.Block><_Builtin.Block className="dropdown-menu-title-border" tag="div" /></_Builtin.Block><_Builtin.Block className="utiliti-menu-wrapper" tag="div"><_Builtin.Block className="dropdown-menu-title _2" tag="div">{"Utility pages"}</_Builtin.Block><_Builtin.Block className="dropdown-menu-list-wrapper _2" tag="div"><_Builtin.Link
                                                            className="dropdown-menu-link"
                                                            button={false}
                                                            block=""
                                                            options={{
                                                                href: "#"
                                                            }}>{"Style Guide"}</_Builtin.Link><_Builtin.Link
                                                            className="dropdown-menu-link"
                                                            button={false}
                                                            block=""
                                                            options={{
                                                                href: "#"
                                                            }}>{"Licenses"}</_Builtin.Link><_Builtin.Link
                                                            className="dropdown-menu-link"
                                                            button={false}
                                                            block=""
                                                            options={{
                                                                href: "#"
                                                            }}>{"Changelog"}</_Builtin.Link><_Builtin.Link
                                                            className="dropdown-menu-link"
                                                            button={false}
                                                            block=""
                                                            options={{
                                                                href: "#"
                                                            }}>{"Password protected"}</_Builtin.Link><_Builtin.Link
                                                            className="dropdown-menu-link"
                                                            button={false}
                                                            block=""
                                                            options={{
                                                                href: "#"
                                                            }}>{"404"}</_Builtin.Link></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.DropdownList></_Builtin.DropdownWrapper></_Builtin.Block><_Builtin.Block
                                    className="dropdown-utility-pages"
                                    id="w-node-_99054b94-c8c9-46d4-be84-b5c03691953a-369194b2"
                                    tag="div"><_Builtin.Block className="dropdown-utility-title" tag="div">{"Utility pages"}</_Builtin.Block><_Builtin.Block
                                        className="manu-list-wrapper _2"
                                        id="w-node-_99054b94-c8c9-46d4-be84-b5c03691953d-369194b2"
                                        tag="div"><_Builtin.Link
                                            className="nav-link"
                                            button={false}
                                            block=""
                                            options={{
                                                href: "#"
                                            }}>{"Style Guide"}</_Builtin.Link><_Builtin.Link
                                            className="nav-link"
                                            button={false}
                                            block=""
                                            options={{
                                                href: "#"
                                            }}>{"Licenses"}</_Builtin.Link><_Builtin.Link
                                            className="nav-link"
                                            button={false}
                                            block=""
                                            options={{
                                                href: "#"
                                            }}>{"Changelog"}</_Builtin.Link><_Builtin.Link
                                            className="nav-link"
                                            button={false}
                                            block=""
                                            options={{
                                                href: "https://ganify-ai.webflow.io/401"
                                            }}>{"Password protected"}</_Builtin.Link><_Builtin.Link
                                            className="nav-link"
                                            button={false}
                                            block=""
                                            options={{
                                                href: "https://ganify-ai.webflow.io/404"
                                            }}>{"404"}</_Builtin.Link><_Builtin.DropdownWrapper className="dropdown" tag="div" delay={0} hover={false}><_Builtin.DropdownToggle className="dropdown-toggle" tag="div"><_Builtin.Block className="nav-link" tag="div">{"Pages"}</_Builtin.Block><_Builtin.Icon
                                                    className="dropdown-icon"
                                                    widget={{
                                                        type: "icon",
                                                        icon: "dropdown-toggle"
                                                    }} /></_Builtin.DropdownToggle><_Builtin.DropdownList className="dropdown-list" tag="nav"><_Builtin.Block className="dropdown-boarder" tag="div" /><_Builtin.Block className="dropdown-wrapper" tag="div"><_Builtin.Block className="drop-down-menu-wrapper" tag="div"><_Builtin.Block className="dropdown-main-menu-list-wrapper" tag="div"><_Builtin.Block className="dropdown-menu-title" tag="div">{"Pages"}</_Builtin.Block><_Builtin.Block className="dropdown-menu-list-wrapper" tag="div"><_Builtin.Link
                                                                    className="dropdown-menu-link"
                                                                    button={false}
                                                                    block=""
                                                                    options={{
                                                                        href: "#"
                                                                    }}>{"Home"}</_Builtin.Link><_Builtin.Link
                                                                    className="dropdown-menu-link"
                                                                    button={false}
                                                                    block=""
                                                                    options={{
                                                                        href: "#"
                                                                    }}>{"About"}</_Builtin.Link><_Builtin.Link
                                                                    className="dropdown-menu-link"
                                                                    button={false}
                                                                    block=""
                                                                    options={{
                                                                        href: "#"
                                                                    }}>{"Services"}</_Builtin.Link><_Builtin.Link
                                                                    className="dropdown-menu-link"
                                                                    button={false}
                                                                    block=""
                                                                    options={{
                                                                        href: "#"
                                                                    }}>{"Projects"}</_Builtin.Link><_Builtin.Link
                                                                    className="dropdown-menu-link"
                                                                    button={false}
                                                                    block=""
                                                                    options={{
                                                                        href: "#"
                                                                    }}>{"Pricing"}</_Builtin.Link><_Builtin.Link
                                                                    className="dropdown-menu-link"
                                                                    button={false}
                                                                    block=""
                                                                    options={{
                                                                        href: "#"
                                                                    }}>{"Blog"}</_Builtin.Link></_Builtin.Block></_Builtin.Block><_Builtin.Block className="dropdown-main-menu-list-wrapper" tag="div"><_Builtin.Block className="dropdown-menu-title" tag="div">{"Inner Pages"}</_Builtin.Block><_Builtin.Block className="dropdown-menu-list-wrapper" tag="div"><_Builtin.Link
                                                                    className="dropdown-menu-link"
                                                                    button={false}
                                                                    block=""
                                                                    options={{
                                                                        href: "#"
                                                                    }}>{"Project Single"}</_Builtin.Link><_Builtin.Link
                                                                    className="dropdown-menu-link"
                                                                    button={false}
                                                                    block=""
                                                                    options={{
                                                                        href: "#"
                                                                    }}>{"Services Single"}</_Builtin.Link><_Builtin.Link
                                                                    className="dropdown-menu-link"
                                                                    button={false}
                                                                    block=""
                                                                    options={{
                                                                        href: "#"
                                                                    }}>{"Blog Single"}</_Builtin.Link><_Builtin.Link
                                                                    className="dropdown-menu-link"
                                                                    button={false}
                                                                    block=""
                                                                    options={{
                                                                        href: "#"
                                                                    }}>{"Pricing Single"}</_Builtin.Link><_Builtin.Link
                                                                    className="dropdown-menu-link"
                                                                    button={false}
                                                                    block=""
                                                                    options={{
                                                                        href: "#"
                                                                    }}>{"Contact"}</_Builtin.Link></_Builtin.Block></_Builtin.Block><_Builtin.Block className="dropdown-menu-title-border" tag="div" /></_Builtin.Block><_Builtin.Block className="utiliti-menu-wrapper" tag="div"><_Builtin.Block className="dropdown-menu-title _2" tag="div">{"Utility pages"}</_Builtin.Block><_Builtin.Block className="dropdown-menu-list-wrapper _2" tag="div"><_Builtin.Link
                                                                className="dropdown-menu-link"
                                                                button={false}
                                                                block=""
                                                                options={{
                                                                    href: "#"
                                                                }}>{"Style Guide"}</_Builtin.Link><_Builtin.Link
                                                                className="dropdown-menu-link"
                                                                button={false}
                                                                block=""
                                                                options={{
                                                                    href: "#"
                                                                }}>{"Licenses"}</_Builtin.Link><_Builtin.Link
                                                                className="dropdown-menu-link"
                                                                button={false}
                                                                block=""
                                                                options={{
                                                                    href: "#"
                                                                }}>{"Changelog"}</_Builtin.Link><_Builtin.Link
                                                                className="dropdown-menu-link"
                                                                button={false}
                                                                block=""
                                                                options={{
                                                                    href: "#"
                                                                }}>{"Password protected"}</_Builtin.Link><_Builtin.Link
                                                                className="dropdown-menu-link"
                                                                button={false}
                                                                block=""
                                                                options={{
                                                                    href: "#"
                                                                }}>{"404"}</_Builtin.Link></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.DropdownList></_Builtin.DropdownWrapper></_Builtin.Block></_Builtin.Block></_Builtin.Block><_Builtin.Block className="mobile-button" tag="div"><_Builtin.Link
                                    className="font-button _404 nav"
                                    data-w-id="b248cc07-9a4c-361c-5259-b2a2499e4a6a"
                                    button={false}
                                    block="inline"
                                    options={{
                                        href: "#",
                                        target: "_blank"
                                    }}><_Builtin.Block className="font-button-wrap" tag="div"><_Builtin.Block className="font-button-texts" tag="div"><_Builtin.Block className="font-button-text _01" tag="div">{"Contact"}</_Builtin.Block><_Builtin.Block className="font-button-text" tag="div">{"Contact"}<br /></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.Link></_Builtin.Block></_Builtin.Block></_Builtin.NavbarMenu><_Builtin.Block className="nav-button-wrapper" tag="div"><_Builtin.Link
                            className="font-button _404 nav"
                            data-w-id="2f767aec-e156-5550-f61c-d37d8bc3f91b"
                            button={false}
                            block="inline"
                            options={{
                                href: "#",
                                target: "_blank"
                            }}><_Builtin.Block className="font-button-wrap" tag="div"><_Builtin.Block className="font-button-texts" tag="div"><_Builtin.Block className="font-button-text _01" tag="div">{"Hablemos"}</_Builtin.Block><_Builtin.Block className="font-button-text" tag="div">{"Contact"}<br /></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.Link></_Builtin.Block><_Builtin.NavbarButton className="menu-button" tag="div"><_Builtin.NotSupported _atom="Animation" /></_Builtin.NavbarButton></_Builtin.Block></_Builtin.Block></_Component>
    );
}