import React from "react";
import Layout from "../Layout/layout";

const ContactPage = () => {
  return (
    <Layout>
      <div>
        <div className="bg-whtie relative z-10">
          <iframe
            title="mapa"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463.7804377276588!2d20.49309380897532!3d43.13801443094567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4756283b2fe8f599%3A0xe8605211dc68f812!2z0JTRg9Cx0YDQvtCy0LDRh9C60LAgNDAyLiwg0J3QvtCy0Lgg0J_QsNC30LDRgA!5e1!3m2!1ssr!2srs!4v1688646479751!5m2!1ssr!2srs"
            width="100%"
            height="450"
            className="border-none bg-white"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="py-20 flex md:flex-row flex-col justify-center items-center relative z-10 bg-teal-50">
          <div className="md:w-[40%] px-10 md:px-0 text-2xl md:text-xl">
            <h2 className="text-teal-900 mb-6 text-3xl md:text-start text-center">
              Kontaktirajte nas danas
            </h2>
            <p>
              Ako imate pitanje, ili ako možemo da pomognemo na bilo koji način,
              javite nam se ili nam pišite na našu email adresu.
            </p>
            <p>Telefoni:</p>
            <p>+381 66 123456</p>
            <p>Adresa:</p>
            <p>
              Dubrovačka <span className="number">402/34</span>
            </p>
            <p>
              <span className="number">36300</span> Novi Pazar
            </p>
            <p>Email adresa:</p>
            <a
              className="text-teal-600"
              href="mailto:bajrovicgroup2023@gmail.com">
              bajrovicgroup2023@gmail.com
            </a>
          </div>
          <div
            className="md:w-[40%] w-4/5 mt-14 flex flex-col justify-center items-center"
            id="contactForm">
            <form
              action=""
              className="md:w-[80%] w-full flex flex-col justify-center items-center">
              <input
                type="text"
                id="ime"
                placeholder="Ime"
                required
                className="mb-4 mr-4 w-full p-2 text-lg border border-solid border-gray-900 rounded"
              />
              <input
                type="text"
                id="prezime"
                placeholder="Prezime"
                required
                className="mb-4 mr-4 w-full p-2 text-lg border border-solid border-gray-900 rounded"
              />
              <input
                type="number"
                id="telefon"
                placeholder="Telefon"
                required
                className="mb-4 mr-4 w-full p-2 text-lg border border-solid border-gray-900 rounded"
              />
              <textarea
                placeholder="Poruka"
                id="message"
                required
                className="mb-4 mr-4 w-full p-2 text-lg border border-solid border-gray-900 rounded"></textarea>
              <button
                className="mr-4 w-full text-lg p-2 border-none bg-teal-900 cursor-pointer transition-all"
                type="submit">
                POŠALJI
              </button>
            </form>
            <div id="warningMessage" className="hidden">
              Molimo popunite sva polja.
            </div>
            <div id="successMessage" className="hidden">
              Poruka uspešno poslata!
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
