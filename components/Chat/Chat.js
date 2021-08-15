import MessengerCustomerChat from 'react-messenger-customer-chat'

//export const Chat = ({ pageId }) => <MessengerCustomerChat pageId={152209902206613} appId="page1" />

const SCRIPT = `var chatbox = document.getElementById('fb-customer-chat');
      chatbox.setAttribute("page_id", "${process.env.NEXT_PUBLIC_PAGE_ID}");
      chatbox.setAttribute("attribution", "biz_inbox");
      console.log('FB CHAT SCRIPT LOADED');
      window.fbAsyncInit = function() {
        FB.init({
          xfbml            : true,
          version          : 'v11.0'
        });
      };

      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
      `

export const Chat = () => (
  <div>
    <div id="fb-root" />
    <div id="fb-customer-chat" className="fb-customerchat" />
    <script dangerouslySetInnerHTML={{ __html: SCRIPT }} />
  </div>
)
