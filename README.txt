How to add new photos and shoit!

PHOTOS

Firstly, as Im sure you can tell, there are 3 collection files. Each one of these contains the javascript that displays the images. Easy. To add more, you just need to add more lines to that array. (Starts line 19 of each collection file) For each one you need a url of the image, and the title is the caption at the bottom of the screen. Remember to include your commas after all but the last one, and you should be fine. Easy really.

Ive put the photos in images/photos, but you can put them wherever you want, as ling as the URL is right. You might want to look at uploading them to flickr or another CDN as there servers will be faster than yours. For the best results, you could set up an Amazon S3 Account, or even put them in Dropbox. But, we're talking miliseconds here, so its up to you. 

Image size wise, obvs the smaller they are, the faster they load. You'll have to find a balance between image quality and loading. Remember that the site re-sizes them all. Id think something along the 1024px wide is a happy medium to go for, but experimentation is up to you.

CONTENT

If yo want to edit the about/contact stuff, the html for that is in index.html, which acts as a layout for the whole site. They currently start on lines 77 and 86, and Ive put some comments in for you to help them find them. Thats just normal HTML, so you should be fine with that. Any issues holler!

NAV

If you want to add another collection at any point, the menu is in index.html, line 66. Here the JS use's the class to load the correct html page, so the next one will be called class="collection-4" and collection-4.html etc etc. Im sure you'll get it. If you do add stuff, you'll need to change the top position of the sliding box's. This is on line 74 of stylesheets/layout.css You'll just have to increase that number to move the box further down.

ERROR PAGES

Some hosts will let you do custom error pages. These are the ones we do at work as standard, so if you have the ability to set them up its a nice touch, but if not its not a necessity.

I think thats the basic's. The rest is pretty straight forward, and I'm sure your versed enough to poke around and edit anything you see fit. If you get stuck or anything, just give us an email and I'll do my best to give you a hand. 

Peace.x