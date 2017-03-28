<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Gallery</title>
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" href="css/gallery.css">
    <link rel="stylesheet" href="css/style.css">
  </head>
  <body>
    
    <div class="container">
      <div class="row">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias vero numquam, tenetur cum excepturi optio, ipsum error amet facilis ad beatae eveniet eum inventore iusto delectus. Perspiciatis recusandae inventore dignissimos.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa est reprehenderit dolore saepe ad consectetur, quisquam quod amet necessitatibus minima! Ducimus consequatur incidunt recusandae quae autem rerum adipisci deserunt porro.</p>

        <div class="gallery clearfix">
          <?php for($i=1; $i<=6; $i++): ?>

            <div class="gallery__item" data-image="img/<?php echo $i;?>.jpg">
              
                <img src="img/<?php echo $i; ?>-300x300.jpg" alt="">
              
            </div>

          <?php endfor; ?>
        </div>
      </div>
    </div>
    <br><br>

    <script src="js/jquery-3.2.0.js"></script>    
    <script src="js/gallery.js"></script>
    <script src="js/script.js"></script>
  </body>
</html>
