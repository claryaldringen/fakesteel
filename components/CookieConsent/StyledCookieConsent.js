import CookieConsent from 'react-cookie-consent'

export const StyledCookieConsent = () => (
  <CookieConsent
    style={{ background: 'black', color: 'white' }}
    buttonStyle={{ background: '#222222', color: 'white', padding: 12, fontWeight: 'bold' }}
  >
    This website uses cookies to enhance the user experience.
  </CookieConsent>
)
