export default function Footer() {

    return (
        <footer className="px-4 py-2 flex items-center justify-center">
            <p className="text-neutral-500 font-poppins text-sm md:text-base">
                &copy; {new Date().getFullYear()} All rights reserved.
            </p>
        </footer>
    )

}
