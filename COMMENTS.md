### Changes made on (11/06)

#### In merging pull request #10 - temp-dev

##### Major Changes
- (src\pages\ExplorePage\ExplorePage.jsx): Lines 11 to 16: Added a cleanup in useEffect for memory leak
- (src\App.js): Memoized the footer as its static, to prevent re-rendering on every page and route change.
- (new file: src\components\SearchBar\SearchBar.jsx): Moved from NavTop to here, added debouncing in search

##### Minor Changes
- (new file: COMMENTS.md): Added comments.md
- (new asset: public\assets\banner-2.jpg): Deleted previous 19Mb image banner-2, exchanged banner-1 and 2
- (src\components\NavigationTop\NavigationTop.jsx): Line 149 signoutFn, Line 169 added class reset-btn-hover, Lines 87, 96, 155, 164: Added reset-btn-hover class, Deleted NavLink Account
- (src\components\PlaylistCard\PlaylistCard.jsx): Line 29: removed m1 class, Line 36: removed p-2, Line 52: removed {""}
- (src\pages\SinglePlaylistPage\SinglePlaylistPage.jsx): Line 20 to 37: Fixed breaking change on refresh, added return null if playlist empty, Line 30: fixed breaking warning instead of playlist._id had to pass video._id
- (src\styles\main.css): Line 35 to 40: Added flex-cards properties for fixing video listing pages, Line 50 to 54: Added reset btn hover class properties to fix default chrome button behavior
- (src\components\HomeCarousel\HomeCarousel.jsx): Line 29 Added reset-btn-hover class
- (src\components\PlaylistVideos\PlaylistVideos.jsx): Line 78: Added reset-btn-hover class
- (src\components\VideoCard\VideoCard.jsx): Line 141: Added reset-btn-hover class
- (src\pages\AuthenticationPage\LoginPage.jsx): Removed forgot password and signup row in form, added reset-btn-hover class
- (src\pages\AuthenticationPage\SignupPage.jsx): Line 180: added reset-btn-hover class
- (src\pages\HistoryPage\HistoryPage.jsx): Line 29 added reset-btn-hover class, Line 36 added flex-cards class
- (src\pages\LikedPage\LikedPage.jsx, src\pages\PlaylistPage\PlaylistPage.jsx, src\pages\WatchLaterPage\WatchLaterPage.jsx): Added flex-cards class
- (src\components\HomeCarousel\home-carousel.css): Line 20 to 23: Added hover to Watch Now button