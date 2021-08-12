import {useCookieConsent} from 'use-cookie-consent';

export const CookieConsent = () => {
  const {consent, acceptAllCookies, declineAllCookies, acceptCookies} =
    useCookieConsent();

  return (
    <div className="">
      <h3>
        {`Third-party cookies ${consent.thirdParty ? 'approved' : 'rejected'}`}
      </h3>
      <h3>
        {`First-party cookies ${consent.firstParty ? 'approved' : 'rejected'}`}
      </h3>

      <button onClick={acceptAllCookies}>Accept all</button>
      <button onClick={() => acceptCookies({thirdParty: true})}>
        Accept third-party
      </button>
      <button onClick={() => acceptCookies({firstParty: true})}>
        Accept first-party
      </button>
      <button onClick={declineAllCookies}>Reject all</button>
    </div>
  );
};

