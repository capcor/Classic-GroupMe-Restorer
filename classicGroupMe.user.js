// ==UserScript==
// @name Old GroupMe
// @namespace http://tampermonkey.net/
// @version 0.1
// @author capcor
// @match *://web.groupme.com/*
// @match *://groupme.com/*
// @match *://cdn.groupme.com/*
// @match https://web.groupme.com/chats
// @grant none
// ==/UserScript==

(function() {


    var style = document.createElement('style');
    style.innerHTML = `
        #app {
          background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255),
    rgba(255, 255, 255)
  ), url("https://upload.wikimedia.org/wikipedia/commons/0/0c/PEO-groupme-0.svg");
  }
        .message-composer {
          padding: 0px 0px !important;
        }
        .message-composer .composer-layout .composer-wrapper .emoji-wysiwyg-editor {
            background-color: #fffFff;
            border-radius: 0px;
            padding: 14px 14px 14px 55px;
            margin: 0px;
        }
        body {
          font-family: -system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif !important;
        }
        #chats .chat-header .menu-toggle .avatar-wrap .avatar img {
            border-radius: 0px;
        }
        #chats .chat {
            margin: 0px 0px !important;
        }
        .chat-messages .message .message-body .content .message-text {
            font-size: 14px !important;
        }
        #chats {
            position: fixed !important;
            width: 900px !important;
        }
        .list-item[data-v-71ca7a33] {
          padding: 0px 0px !important;
        }
        img[data-v-3383a9a2] {
            width: 30px !important;
            height: 30px !important;
        }
        .image-content .image-wrapper img {
            border-radius: 0px;
        }
        .pillar {
            background-color: #ffffff !important;
        }
        .pillar * {
            color: #00AFF0 !important;
        }
        .new-chat * {
            color: #00AFF0 !important;
        }
        .message-composer .composer-layout .plus-extender * {
            color: #00AFF0 !important;
        }
        .chat-messages .message .message-header .message-pill {
            border: 5px solid #00AFF0  !important;
            height: 30px !important;
            margin-right: 0  !important;
            margin-top: 0  !important;
            left: 0px !important;
        }
        .toggle-switch * {
            color: #00AFF0 !important;
        }
        .fancy-toggle * {
          color: #00AFF0 !important;
        }
        .company-links * {
          color: #00AFF0 !important;
        }
        .poundie {
            background-image: url('https://upload.wikimedia.org/wikipedia/commons/0/0c/PEO-groupme-0.svg') !important;
            background-size: cover !important;
        }
        .skype-button-container {
          display: none !important;
        }
        .message-composer .composer-layout .composer-wrapper .emoji-wysiwyg-editor:empty:before {
          left: 55px;
        }
        .message-composer .composer-layout .controls-right {
          left: 0px;
          top: 5px
        }
        .message-composer .composer-layout .controls-left {
          left: 850px;
          top: 3px;
        }
        .pillar .tray-controls {
          top: 120px;
          position: fixed;
        }
        .pillar .tab.profile img{
          position: fixed;
          top: 83px;
        }
        .pillar .tab.logo svg path {
          fill: #00AFF0 !important;
        }
        .pillar .tab.active {
          box-shadow: 0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px 0px rgba(0,0,0,0) !important;
        }
        * {
          border-radius: 0px !important;
        }
        #tray {
          background-color: #f5f5f5
        }
        .list-item[data-v-7debf0df] {
          padding: 0 0 !important;
        }
        .chat-action.transparent-back.accessible-focus{
          display:none;
          }


.iframely-embeded .unfurled .meta[data-v-44631842] {
  background-color: rgba(43,43,48,.7);
}

.iframely-embeded .unfurled .meta .title[data-v-44631842] {
  font-size: 12px;
  color: white;
}

.iframely-embeded .unfurled .host[data-v-44631842] {
  background: rgba(0, 0, 0, 0) !important;
  backdrop-filter: blur(0px) !important;
  padding: 170px 10px 3px 3px;
}

.iframely-embeded .unfurled .host img[data-v-44631842] {
  max-width: 16px;
  max-height: 16px;
}


#D0482EC6-D8EA-4F33-A622-2C12141394C6 > div:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1) > div:nth-child(3) {
  padding-bottom: 30px;
}


#D0482EC6-D8EA-4F33-A622-2C12141394C6 > div:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1) > div:nth-child(1) {
  padding-top: 212px;
  padding-left: 16px;
  padding-left: 16px;
  margin-left: 0px;
}

.iframely-embeded[data-v-44631842] {
  max-width: 533px;
}

.iframely-embeded .unfurled[data-v-44631842] {
  max-width: 360px;
}




    `;
    document.head.appendChild(style);

    'use strict';

    const newFaviconUrl = 'https://web.archive.org/web/20130115074559id_/https://groupme.com/favicon.ico'; // Replace with the URL of the new favicon image

    const linkElements = document.getElementsByTagName('link');
    for (let i = 0; i < linkElements.length; i++) {
        const linkElement = linkElements[i];
        if (linkElement.rel === 'icon' || linkElement.rel === 'shortcut icon') {
            linkElement.href = newFaviconUrl;
            break;
        }
    }

})();

