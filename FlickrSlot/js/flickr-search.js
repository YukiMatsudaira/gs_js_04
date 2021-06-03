

// 画像検索を行う関数
function photo_search ( param ) {
    // APIリクエストパラメタの設定
    param.api_key  = '';
    param.method   = 'flickr.photos.search';
    param.per_page = 3;
    param.sort     = 'interestingness-desc';
    param.format   = 'json';
    param.jsoncallback = 'jsonFlickrApi';

    // APIリクエストURLの生成(GETメソッド)
    var url = 'http://www.flickr.com/services/rest/?'+
               obj2query( param );

    // script 要素の発行
    var script  = document.createElement( 'script' );
    script.type = 'text/javascript';
    script.src  = url;
    document.body.appendChild( script );
};

// オブジェクトからクエリー文字列を生成する関数
function obj2query ( obj ) {
    var list = [];
    for( var key in obj ) {
        var k = encodeURIComponent(key);
        var v = encodeURIComponent(obj[key]);
        list[list.length] = k+'='+v;
    }
    var query = list.join( '&' );
    return query;
}

// Flickr検索終了後のコールバック関数
function jsonFlickrApi ( data ) {
    // データが取得できているかチェック
    if ( ! data ) return;
    if ( ! data.photos ) return;
    var list = data.photos.photo;
    if ( ! list ) return;
    if ( ! list.length ) return;

    for( var i=0; i<list.length; i++ ) {
        var photo = list[i];
        images[i] = 'http://static.flickr.com/'+photo.server+'/'+photo.id+'_'+photo.secret+'_s.jpg'; 
    }

    initFlg++;
}

const shuffle = document.getElementById('shuffle');
shuffle.addEventListener('click', () => {
   const idText = document.getElementById('input_text');
   let stringText = idText.value;
   if (  stringText === '' ){
       stringText = 'HDR';
   }
   console.log(stringText);
   photo_search({ text: stringText });
})

let initFlg = 0;
function getInitFlg(){
    return initFlg;
}

const images = [0,0,0];
function getFlickrImage(){
    return images;
}