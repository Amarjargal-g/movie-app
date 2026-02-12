export const Footer = () => {
  return (
    <div className="bg-[#4338CA] text-white">
      <div>
        {" "}
        <img src="/Logo2.png" alt="Logo" />
        <p>© 2024 Movie Z. All rights Reserved.</p>
      </div>
      <div className="flex gap-7">
        <div>
          <p>Contact Information</p>
          <div>
            <p>✉️</p>
            <p> Email:Support@movieZ.com</p>
          </div>
          <div>
            <p>📞</p>
            <p>Phone:+976 (11) 123-4567</p>
          </div>
        </div>
        <div>
          <p>Follow us</p>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>X</p>
          <p>Youtube</p>
        </div>
      </div>
    </div>
  );
};
