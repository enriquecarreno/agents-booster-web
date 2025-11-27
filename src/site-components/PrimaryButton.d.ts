import * as React from "react";
import * as Types from "./types";

declare function PrimaryButton(
    props: {
        as?: React.ElementType;
        primaryButtonText?: React.ReactNode;
        primaryButtonLink?: Types.Basic.Link;
    }
): React.JSX.Element