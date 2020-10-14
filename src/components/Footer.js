import React from "react";

export default function Footer() {
    return (
        <footer className="w-full p-2 text-center nes-container bg-white is-rounded shadow-2xl">
            Made with <span className="text-red-600">{"<3"}</span> by{" "}
            <a
                href="http://github.com/mupinnn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
            >
                @mupinnn
            </a>
        </footer>
    );
}
