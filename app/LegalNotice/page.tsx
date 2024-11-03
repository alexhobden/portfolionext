const Page: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-lg justify-center w-full h-screen text-white">
      <div>
        <h1 className="text-5xl font-comfortaa text-shadow-textr font-bold">
          Legal Notice
        </h1>
        <br />
        <p className="text-lg font-inria mt-4">
          Information according to §5 DDG
        </p>
        <br />
        <h2 className="text-3xl font-inria font-bold">Address</h2>
        <p>Alexander Hobden</p>
        <p>Heimgartenstraße 55</p>
        <p>70329 Stuttgart</p>
        <br />
        <p>Telefon: +49 15150653378</p>
        <p>E-Mail: alex.hobden@gmx.de</p>
        <br />
        <h2 className="text-3xl font-inria font-bold">EU Dispute resolution</h2>
        <p>
          The European Commission provides a platform for online dispute
          resolution (ODR):
        </p>
        <p>https://ec.europa.eu/consumers/odr</p>
        <br />
        <p>Our e-mail address can be found above in the site notice.</p>
      </div>
    </div>
  );
};
export default Page;
