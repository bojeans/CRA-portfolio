const Contact = () => {
  return (
    <>
      <h1>Contact Page</h1>
      <form action="https://formspree.io/f/xnqwbjwd" method="POST">
        <div>
          <label htmlFor="fname">Full Name</label>
          <input
            type="text"
            id="name"
            name="fullname"
            placeholder="Your name.."
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="your@email"
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Phone number (optional)</label>
          <input type="tel" id="phone" name="phone" placeholder="123" />
        </div>
        <div>
          <label htmlFor="country">Country</label>
          <select id="country" name="country">
            <option value="new zealand">New Zealand</option>
            <option value="australia">Australia</option>
            <option value="other">Other - please specify in message</option>
          </select>
        </div>
        <div>
          <label htmlFor="subject">Message</label>
          <textarea
            id="subject"
            name="subject"
            placeholder="Write something.."
          ></textarea>
        </div>
        <button>
          <input type="submit" value="Submit" />
        </button>
      </form>
    </>
  );
};

export default Contact;
