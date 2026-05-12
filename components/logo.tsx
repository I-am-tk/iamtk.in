import type { SVGProps } from "react";

export function Logo(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="none"
            viewBox="0 0 151 151"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <circle
                className="transition-[fill] duration-200"
                cx="75.5"
                cy="75.5"
                fill="var(--logo-fill, currentColor)"
                r="75.5"
            />
            <circle
                className="transition-[fill] duration-200"
                cx="75.5"
                cy="75.5"
                fill="url(#logo-gradient)"
                fillOpacity="0.2"
                r="75.5"
            />
            <path
                className="transition-[fill] duration-200"
                d="M79.5109 27.89L28.9848 50.0511L27.3432 60.4155L78.0014 37.4205L53.7978 114.675L65.4727 116.524L88.9223 29.3806L79.5109 27.89Z"
                fill="var(--logo-mark, var(--background))"
            />
            <path
                className="transition-[fill] duration-200"
                d="M85.8291 59.1491L118.873 73.6424L119.947 80.4207L86.8163 65.382L102.645 115.906L95.01 117.115L79.6741 60.124L85.8291 59.1491Z"
                fill="var(--logo-mark, var(--background))"
            />
            <defs>
                <radialGradient
                    cx="0"
                    cy="0"
                    gradientTransform="translate(75.5 75.5) rotate(90) scale(75.5)"
                    gradientUnits="userSpaceOnUse"
                    id="logo-gradient"
                    r="1"
                >
                    <stop
                        className="transition-[stop-color] duration-200"
                        offset="0.452062"
                        stopColor="var(--logo-gradient-start, var(--background))"
                    />
                    <stop
                        className="transition-[stop-color] duration-200"
                        offset="1"
                        stopColor="var(--logo-gradient-end, currentColor)"
                    />
                </radialGradient>
            </defs>
        </svg>
    );
}
