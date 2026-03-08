export const Footer = () => {
  return (
    <footer className="bg-[#4338CA] text-white py-16 mt-32">
      <div className="max-w-480 mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div className="space-y-4 min-w-50">
            <img src="/white.svg" alt="Logo" className="w-28 sm:w-32 h-auto" />
            <p className="text-sm text-white/80">
              © 2024 Movie Z. All rights Reserved.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 md:gap-24">
            <div className="space-y-5">
              <p className="font-semibold text-lg">Contact Information</p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-lg mt-0.5">✉️</span>
                  <div className="flex flex-col">
                    <span className="text-white/60 text-[10px] uppercase font-bold tracking-wider">
                      Email
                    </span>
                    <span className="text-sm">Support@movieZ.com</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-lg mt-0.5">📞</span>
                  <div className="flex flex-col">
                    <span className="text-white/60 text-[10px] uppercase font-bold tracking-wider">
                      Phone
                    </span>
                    <span className="text-sm">+976 (11) 123-4567</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-5">
              <h3 className="font-semibold text-lg">Follow us</h3>
              <ul className="space-y-2 text-sm text-white/90">
                <li className="hover:underline cursor-pointer">Facebook</li>
                <li className="hover:underline cursor-pointer">Instagram</li>
                <li className="hover:underline cursor-pointer">X</li>
                <li className="hover:underline cursor-pointer">Youtube</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
