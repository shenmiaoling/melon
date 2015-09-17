/**
 * @file melon demo button
 * @author leon(ludafa@outlook.com)
 */

var React = require('react');

var Title = require('../src/Title.jsx');
var Button = require('../src/Button.jsx');
var icons = [
    'error',
    'error-outline',
    'warning',
    'add-alert',
    'album',
    'av-timer',
    'closed-caption',
    'equalizer',
    'explicit',
    'fast-forward',
    'fast-rewind',
    'games',
    'hearing',
    'high-quality',
    'loop',
    'mic',
    'mic-none',
    'mic-off',
    'movie',
    'library-add',
    'library-books',
    'library-music',
    'new-releases',
    'not-interested',
    'pause',
    'pause-circle-filled',
    'pause-circle-outline',
    'play-arrow',
    'play-circle-filled',
    'play-circle-outline',
    'playlist-add',
    'queue',
    'queue-music',
    'radio',
    'recent-actors',
    'repeat',
    'repeat-one',
    'replay',
    'shuffle',
    'skip-next',
    'skip-previous',
    'snooze',
    'stop',
    'subtitles',
    'surround-sound',
    'video-collection',
    'videocam',
    'videocam-off',
    'volume-down',
    'volume-mute',
    'volume-off',
    'volume-up',
    'web',
    'hd',
    'sort-by-alpha',
    'airplay',
    'forward-10',
    'forward-30',
    'forward-5',
    'replay-10',
    'replay-30',
    'replay-5',
    'business',
    'call',
    'call-end',
    'call-made',
    'call-merge',
    'call-missed',
    'call-received',
    'call-split',
    'chat',
    'clear-all',
    'comment',
    'contacts',
    'dialer-sip',
    'dialpad',
    'email',
    'forum',
    'import-export',
    'invert-colors-off',
    'live-help',
    'location-off',
    'location-on',
    'message',
    'chat-bubble',
    'chat-bubble-outline',
    'no-sim',
    'phone',
    'portable-wifi-off',
    'contact-phone',
    'ring-volume',
    'speaker-phone',
    'stay-current-landscape',
    'stay-current-portrait',
    'stay-primary-landscape',
    'stay-primary-portrait',
    'swap-calls',
    'textsms',
    'voicemail',
    'vpn-key',
    'phonelink-erase',
    'phonelink-lock',
    'phonelink-ring',
    'phonelink-setup',
    'present-to-all',
    'add',
    'add-box',
    'add-circle',
    'add-circle-outline',
    'archive',
    'backspace',
    'block',
    'clear',
    'content-copy',
    'content-cut',
    'content-paste',
    'create',
    'drafts',
    'filter-list',
    'flag',
    'forward',
    'gesture',
    'inbox',
    'link',
    'mail',
    'markunread',
    'redo',
    'remove',
    'remove-circle',
    'remove-circle-outline',
    'reply',
    'reply-all',
    'report',
    'save',
    'select-all',
    'send',
    'sort',
    'text-format',
    'undo',
    'font-download',
    'access-alarm',
    'access-alarms',
    'access-time',
    'add-alarm',
    'airplanemode-inactive',
    'airplanemode-active',
    'battery-alert',
    'battery-charging-full',
    'battery-full',
    'battery-std',
    'battery-unknown',
    'bluetooth',
    'bluetooth-connected',
    'bluetooth-disabled',
    'bluetooth-searching',
    'brightness-auto',
    'brightness-high',
    'brightness-low',
    'brightness-medium',
    'data-usage',
    'developer-mode',
    'devices',
    'dvr',
    'gps-fixed',
    'gps-not-fixed',
    'gps-off',
    'location-disabled',
    'location-searching',
    'graphic-eq',
    'network-cell',
    'network-wifi',
    'nfc',
    'now-wallpaper',
    'now-widgets',
    'screen-lock-landscape',
    'screen-lock-portrait',
    'screen-lock-rotation',
    'screen-rotation',
    'sd-storage',
    'settings-system-daydream',
    'signal-cellular-4-bar',
    'signal-cellular-connected-no-internet-4-bar',
    'signal-cellular-no-sim',
    'signal-cellular-null',
    'signal-cellular-off',
    'signal-wifi-4-bar',
    'signal-wifi-4-bar-lock',
    'signal-wifi-off',
    'storage',
    'usb',
    'wifi-lock',
    'wifi-tethering',
    'attach-file',
    'attach-money',
    'border-all',
    'border-bottom',
    'border-clear',
    'border-color',
    'border-horizontal',
    'border-inner',
    'border-left',
    'border-outer',
    'border-right',
    'border-style',
    'border-top',
    'border-vertical',
    'format-align-center',
    'format-align-justify',
    'format-align-left',
    'format-align-right',
    'format-bold',
    'format-clear',
    'format-color-fill',
    'format-color-reset',
    'format-color-text',
    'format-indent-decrease',
    'format-indent-increase',
    'format-italic',
    'format-line-spacing',
    'format-list-bulleted',
    'format-list-numbered',
    'format-paint',
    'format-quote',
    'format-size',
    'format-strikethrough',
    'format-textdirection-l-to-r',
    'format-textdirection-r-to-l',
    'format-underlined',
    'functions',
    'insert-chart',
    'insert-comment',
    'insert-drive-file',
    'insert-emoticon',
    'insert-invitation',
    'insert-link',
    'insert-photo',
    'merge-type',
    'mode-comment',
    'mode-edit',
    'publish',
    'space-bar',
    'strikethrough-s',
    'vertical-align-bottom',
    'vertical-align-center',
    'vertical-align-top',
    'wrap-text',
    'money-off',
    'attachment',
    'cloud',
    'cloud-circle',
    'cloud-done',
    'cloud-download',
    'cloud-off',
    'cloud-queue',
    'cloud-upload',
    'file-download',
    'file-upload',
    'folder',
    'folder-open',
    'folder-shared',
    'cast',
    'cast-connected',
    'computer',
    'desktop-mac',
    'desktop-windows',
    'developer-board',
    'dock',
    'gamepad',
    'headset',
    'headset-mic',
    'keyboard',
    'keyboard-arrow-down',
    'keyboard-arrow-left',
    'keyboard-arrow-right',
    'keyboard-arrow-up',
    'keyboard-backspace',
    'keyboard-capslock',
    'keyboard-hide',
    'keyboard-return',
    'keyboard-tab',
    'keyboard-voice',
    'laptop',
    'laptop-chromebook',
    'laptop-mac',
    'laptop-windows',
    'memory',
    'mouse',
    'phone-android',
    'phone-iphone',
    'phonelink',
    'phonelink-off',
    'router',
    'scanner',
    'security',
    'sim-card',
    'smartphone',
    'speaker',
    'speaker-group',
    'tablet',
    'tablet-android',
    'tablet-mac',
    'toys',
    'tv',
    'watch',
    'device-hub',
    'power-input',
    'add-to-photos',
    'adjust',
    'assistant',
    'assistant-photo',
    'audiotrack',
    'blur-circular',
    'blur-linear',
    'blur-off',
    'blur-on',
    'brightness-1',
    'brightness-2',
    'brightness-3',
    'brightness-4',
    'brightness-5',
    'brightness-6',
    'brightness-7',
    'broken-image',
    'brush',
    'camera',
    'camera-alt',
    'camera-front',
    'camera-rear',
    'camera-roll',
    'center-focus-strong',
    'center-focus-weak',
    'collections',
    'color-lens',
    'colorize',
    'compare',
    'control-point',
    'control-point-duplicate',
    'crop-16-9',
    'crop-3-2',
    'crop',
    'crop-5-4',
    'crop-7-5',
    'crop-din',
    'crop-free',
    'crop-landscape',
    'crop-original',
    'crop-portrait',
    'crop-square',
    'dehaze',
    'details',
    'edit',
    'exposure',
    'exposure-minus-1',
    'exposure-minus-2',
    'exposure-plus-1',
    'exposure-plus-2',
    'exposure-zero',
    'filter-1',
    'filter-2',
    'filter-3',
    'filter',
    'filter-4',
    'filter-5',
    'filter-6',
    'filter-7',
    'filter-8',
    'filter-9',
    'filter-9-plus',
    'filter-b-and-w',
    'filter-center-focus',
    'filter-drama',
    'filter-frames',
    'filter-hdr',
    'filter-none',
    'filter-tilt-shift',
    'filter-vintage',
    'flare',
    'flash-auto',
    'flash-off',
    'flash-on',
    'flip',
    'gradient',
    'grain',
    'grid-off',
    'grid-on',
    'hdr-off',
    'hdr-on',
    'hdr-strong',
    'hdr-weak',
    'healing',
    'image',
    'image-aspect-ratio',
    'iso',
    'landscape',
    'leak-add',
    'leak-remove',
    'lens',
    'looks-3',
    'looks',
    'looks-4',
    'looks-5',
    'looks-6',
    'looks-one',
    'looks-two',
    'loupe',
    'monochrome-photos',
    'movie-creation',
    'music-note',
    'nature',
    'nature-people',
    'navigate-before',
    'navigate-next',
    'palette',
    'panorama',
    'panorama-fish-eye',
    'panorama-horizontal',
    'panorama-vertical',
    'panorama-wide-angle',
    'photo',
    'photo-album',
    'photo-camera',
    'photo-library',
    'picture-as-pdf',
    'portrait',
    'remove-red-eye',
    'rotate-90-degrees-ccw',
    'rotate-left',
    'rotate-right',
    'slideshow',
    'straighten',
    'style',
    'switch-camera',
    'switch-video',
    'tag-faces',
    'texture',
    'timelapse',
    'timer-10',
    'timer-3',
    'timer',
    'timer-off',
    'tonality',
    'transform',
    'tune',
    'view-comfortable',
    'view-compact',
    'wb-auto',
    'wb-cloudy',
    'wb-incandescent',
    'wb-sunny',
    'collections-bookmark',
    'photo-size-select-actual',
    'photo-size-select-large',
    'photo-size-select-small',
    'vignette',
    'wb-iridescent',
    'beenhere',
    'directions',
    'directions-bike',
    'directions-bus',
    'directions-car',
    'directions-ferry',
    'directions-subway',
    'directions-railway',
    'directions-transit',
    'directions-walk',
    'flight',
    'hotel',
    'layers',
    'layers-clear',
    'local-airport',
    'local-atm',
    'local-attraction',
    'local-bar',
    'local-cafe',
    'local-car-wash',
    'local-convenience-store',
    'local-drink',
    'local-florist',
    'local-gas-station',
    'local-grocery-store',
    'local-hospital',
    'local-hotel',
    'local-laundry-service',
    'local-library',
    'local-mall',
    'local-movies',
    'local-offer',
    'local-parking',
    'local-pharmacy',
    'local-phone',
    'local-pizza',
    'local-play',
    'local-post-office',
    'local-print-shop',
    'local-restaurant',
    'local-see',
    'local-shipping',
    'local-taxi',
    'location-history',
    'map',
    'my-location',
    'navigation',
    'pin-drop',
    'place',
    'rate-review',
    'restaurant-menu',
    'satellite',
    'store-mall-directory',
    'terrain',
    'traffic',
    'directions-run',
    'apps',
    'arrow-back',
    'arrow-drop-down',
    'arrow-drop-down-circle',
    'arrow-drop-up',
    'arrow-forward',
    'cancel',
    'check',
    'chevron-left',
    'chevron-right',
    'close',
    'expand-less',
    'expand-more',
    'fullscreen',
    'fullscreen-exit',
    'menu',
    'keyboard-control',
    'more-vert',
    'refresh',
    'unfold-less',
    'unfold-more',
    'adb',
    'bluetooth-audio',
    'disc-full',
    'do-not-disturb-alt',
    'do-not-disturb',
    'drive-eta',
    'event-available',
    'event-busy',
    'event-note',
    'folder-special',
    'mms',
    'more',
    'network-locked',
    'phone-bluetooth-speaker',
    'phone-forwarded',
    'phone-in-talk',
    'phone-locked',
    'phone-missed',
    'phone-paused',
    'sd-card',
    'sim-card-alert',
    'sms',
    'sms-failed',
    'sync',
    'sync-disabled',
    'sync-problem',
    'system-update',
    'tap-and-play',
    'time-to-leave',
    'vibration',
    'voice-chat',
    'vpn-lock',
    'airline-seat-flat',
    'airline-seat-flat-angled',
    'airline-seat-individual-suite',
    'airline-seat-legroom-extra',
    'airline-seat-legroom-normal',
    'airline-seat-legroom-reduced',
    'airline-seat-recline-extra',
    'airline-seat-recline-normal',
    'confirmation-number',
    'live-tv',
    'ondemand-video',
    'personal-video',
    'power',
    'wc',
    'wifi',
    'cake',
    'domain',
    'group',
    'group-add',
    'location-city',
    'mood',
    'mood-bad',
    'notifications',
    'notifications-none',
    'notifications-off',
    'notifications-active',
    'notifications-paused',
    'pages',
    'party-mode',
    'people',
    'people-outline',
    'person',
    'person-add',
    'person-outline',
    'plus-one',
    'poll',
    'public',
    'school',
    'share',
    'whatshot',
    'check-box',
    'check-box-outline-blank',
    'radio-button-unchecked',
    'radio-button-checked',
    'star',
    'star-half',
    'star-outline',
    '3d-rotation',
    'accessibility',
    'account-balance',
    'account-balance-wallet',
    'account-box',
    'account-circle',
    'add-shopping-cart',
    'alarm',
    'alarm-add',
    'alarm-off',
    'alarm-on',
    'android',
    'announcement',
    'aspect-ratio',
    'assessment',
    'assignment',
    'assignment-ind',
    'assignment-late',
    'assignment-return',
    'assignment-returned',
    'assignment-turned-in',
    'autorenew',
    'backup',
    'book',
    'bookmark',
    'bookmark-outline',
    'bug-report',
    'build',
    'cached',
    'change-history',
    'check-circle',
    'chrome-reader-mode',
    'class',
    'code',
    'credit-card',
    'dashboard',
    'delete',
    'description',
    'dns',
    'done',
    'done-all',
    'event',
    'exit-to-app',
    'explore',
    'extension',
    'face',
    'favorite',
    'favorite-outline',
    'feedback',
    'find-in-page',
    'find-replace',
    'flip-to-back',
    'flip-to-front',
    'get-app',
    'grade',
    'group-work',
    'help',
    'highlight-remove',
    'history',
    'home',
    'hourglass-empty',
    'hourglass-full',
    'https',
    'info',
    'info-outline',
    'input',
    'invert-colors-on',
    'label',
    'label-outline',
    'language',
    'launch',
    'list',
    'lock',
    'lock-open',
    'lock-outline',
    'loyalty',
    'markunread-mailbox',
    'note-add',
    'open-in-browser',
    'open-in-new',
    'open-with',
    'pageview',
    'payment',
    'perm-camera-mic',
    'perm-contact-calendar',
    'perm-data-setting',
    'perm-device-information',
    'perm-identity',
    'perm-media',
    'perm-phone-msg',
    'perm-scan-wifi',
    'picture-in-picture',
    'polymer',
    'power-settings-new',
    'print',
    'query-builder',
    'question-answer',
    'receipt',
    'redeem',
    'report-problem',
    'restore',
    'room',
    'schedule',
    'search',
    'settings',
    'settings-applications',
    'settings-backup-restore',
    'settings-bluetooth',
    'settings-cell',
    'settings-brightness',
    'settings-ethernet',
    'settings-input-antenna',
    'settings-input-component',
    'settings-input-composite',
    'settings-input-hdmi',
    'settings-input-svideo',
    'settings-overscan',
    'settings-phone',
    'settings-power',
    'settings-remote',
    'settings-voice',
    'shop',
    'shop-two',
    'shopping-basket',
    'shopping-cart',
    'speaker-notes',
    'spellcheck',
    'stars',
    'store',
    'subject',
    'supervisor-account',
    'swap-horiz',
    'swap-vert',
    'swap-vertical-circle',
    'system-update-alt',
    'tab',
    'tab-unselected',
    'theaters',
    'thumb-down',
    'thumb-up',
    'thumbs-up-down',
    'toc',
    'today',
    'toll',
    'track-changes',
    'translate',
    'trending-down',
    'trending-neutral',
    'trending-up',
    'turned-in',
    'turned-in-not',
    'verified-user',
    'view-agenda',
    'view-array',
    'view-carousel',
    'view-column',
    'view-day',
    'view-headline',
    'view-list',
    'view-module',
    'view-quilt',
    'view-stream',
    'view-week',
    'visibility',
    'visibility-off',
    'card-giftcard',
    'card-membership',
    'card-travel',
    'work',
    'youtube-searched-for',
    'eject',
    'camera-enhance',
    'help-outline',
    'reorder',
    'zoom-in',
    'zoom-out',
    'http',
    'event-seat',
    'flight-land',
    'flight-takeoff',
    'play-for-work',
    'gif',
    'indeterminate-check-box',
    'offline-pin'
];

var Icon = require('../src/Icon.jsx');

var View = React.createClass({

    render: function() {

        var iconStyle = {
            fontSize: 64,
            display: 'block'
        };

        var list = icons
            .reduce(function (result, icon, index) {

                var rowIndex = index % 4;
                var row = result[rowIndex];

                if (!row) {
                    row = result[rowIndex] = [];
                }

                row.push(icon);

                return result;

            }, [])
            .map(function (row, index) {
                return (
                    <div className="line" key={index}>
                        {row.map(function (icon, index) {
                            return (
                                <div className="cell" key={index}>
                                    <Icon icon={icon} style={iconStyle} title={icon} />
                                    <label>{icon}</label>
                                </div>
                            );
                        })}
                    </div>
                )
            });

        return (
            <div style={{width: '100%'}}>
                <Title level={4}>图标</Title>
                {list}
            </div>
        );
    }

});

module.exports = View;
