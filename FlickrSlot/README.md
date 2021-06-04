# gs_js_04
4回目講義課題「API」

# 課題内容  
・作成物    
写真共有サイト「Flickr」のAPIで取得した写真を、リール部分に使用して作成したスロットゲーム  


・使い方  
*はじめに：別途提出しているAPYKEYをflickr-search.jsの６行目「param.api_key」に記述の上、ご使用ください  



１．テキストに写真検索ワードを入力　例）love,日本など  
２．「IMAGE CHANGE」ボタンを押す  
３．「SPNI」ボタンを押す  
４．リール画像が５０msで変わるので、目押しで「STOP」ボタンを押して、画像を３つ揃える  
*リール画像は検索ワードを変えて「IMAGE CHANGE」ボタンを押すことで変わります  



# 工夫した点/こだわった点  
・FlickrAPIで検索した画像をリール画像に使用するところ  
「IMAGE CHANGE」ボタンを押すたびに配列の中身を変えるようにしています  



・リールが回転しているようにみせるために画像を高速で切り替えているところ  
ググって色々な方法を調べましたが、どうしてもやり方が理解できませんでした  
そのため、最終的にはドッドインストールにあった「スロットマシン」を学習して作成しました  
でも、そのおかげで、JSの書き方で、クラスについて学ぶことができたので、とてもよかったです  



# 質問  
FlickrAPIを使用するとCookieのSameSite属性に関する下記のエラーが、デベロッパーツール上にでます。  
＝＝＝＝  
Indicate whether a cookie is intended to be set in a cross-site context by specifying its SameSite attribute  
Indicate whether to send a cookie in a cross-site request by specifying its SameSite attribute  
＝＝＝＝  
調べてみたのですが、はっきりしたことがわからず、対処の方法を知りたいです。  
似たような現象で下記を見つけたのですが、理解できなかったため。  
http://developer.mixi.co.jp/news/news_apps/016653.html　　



# その他  
APIは海外のものも多く、英語がわかった方が便利だなと感じました。  



