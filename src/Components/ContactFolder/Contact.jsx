import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="contactPage">
        <h2 className="contact_tittle">feel free to contact us</h2>
      </div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.9816870521304!2d84.40539037597121!3d25.03469553826238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d0f51714284bd%3A0x41155eb184bd8730!2sCity%20Janch%20Ghar!5e0!3m2!1sen!2sin!4v1690881356575!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className="form_box">
        <form action="https://formspree.io/f/moqojwbo" method="post">
          <input
            type="text"
            name="USERNAME"
            placeholder="USERNAME"
            required
            autoComplete="off"
          />
          <input
            type="email"
            name="EMAIL"
            placeholder="EMAIL"
            required
            autoComplete="off"
          />
          <textarea name="COMMENT" id="" cols="30" rows="10" autoComplete="off" ></textarea>
          <input type="submit" value="SEND" className="submit_btn" />
        </form>
      </div>
    </>
  );
};

export default Contact;
