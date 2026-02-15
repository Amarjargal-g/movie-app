export const Footer = () => {
  return (
    <footer className="bg-[#4338CA] text-white">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div className="space-y-4">
          <img src="/Logo2.png" alt="Logo" className="w-28 sm:w-32 h-auto" />
          <p className="text-sm text-white/80">
            © 2024 Movie Z. All rights Reserved.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="space-y-3">
            <p className="font-semibold text-lg">Contact Information</p>
            <div className="flex items-center gap-2 text-sm">
              <span>✉️</span>
              <span> Email:Support@movieZ.com</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span>📞</span>
              <span>Phone:+976 (11) 123-4567</span>
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="font-semibold text-lg">Follow us</h3>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>X</li>
              <li>Youtube</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
