
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
    <link rel="stylesheet" href="stylesheets/app.css">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900" rel="stylesheet">
    <link rel="stylesheet" href="//cdn.jsdelivr.net/chartist.js/latest/chartist.min.css">
    <!-- Generate using http://realfavicongenerator.net/ -->


    
  </head>
  <body>
    <div class="app">
        <div class="app__sidebar">
    <a href="" class="app__sidebar-logo">
        <img src="./images/logo-white.png" alt="Al Maha Systems" class="app__sidebar-logo-img">
    </a>

    <nav class="app__sidebar-nav">
        <a href="" class="app__sidebar-nav-link">Dashboard</a>
        <a href="" class="app__sidebar-nav-link active">Statistic</a>
        <a href="" class="app__sidebar-nav-link">Owerview</a>
        <a href="" class="app__sidebar-nav-link">Farms</a>
        <a href="" class="app__sidebar-nav-link">Settings</a>
    </nav>
</div>
        <div class="app__content">
            <div class="app__header">
	<div class="app__header-hamburger hamburger hamburger--slider">
		<div class="hamburger-box">
			<div class="hamburger-inner"></div>
		</div>
	</div>
    <div class="app__header-controls">
        <a href="" class="user">
            <img src="./images/avatar-sample.jpg" alt="">
            Mark Drake
        </a>
        <button class="btn btn--primary">Admin</button>
    </div>
</div>
            
  <div class="app__container content content--report">
    <div class="content__header">
      <h2 class="content__header-title">YTD Milk Yield</h2>
      
      <div class="content__header-controls">
        <ul class="content__header-controls-list">
          <li class="content__header-controls-item"><a href="" class="content__header-controls-link">Quarterly</a></li>
          <li class="content__header-controls-item"><a href="" class="content__header-controls-link">YTD</a></li>
          <li class="content__header-controls-item">
            <a href="" class="content__header-controls-link active">
              Annual
            </a>
            <ul class="sub-menu">
              <li><a href="">2018</a></li>
              <li><a href="">2017</a></li>
              <li><a href="">2016</a></li>
              <li><a href="">2015</a></li>
              <li><a href="">2014</a></li>
              <li><a href="">2013</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>

    <div class="content__body">
      <div class="ct-chart ct-perfect-fourth"></div>
      <!-- <img class="content__graph" src="./images/graph-ytd.png" alt=""> -->
    </div>

    <div class="content__footer">
      <ul>
        <li><a href="">Farm Statistics</a></li>
        <li><a class="is-active" href="">YTD Milk Yeild</a></li>
        <li><a href="">Farm Growth Rate</a></li>
        <li><a href=""># of Cows</a></li>
        <li><a href="">Farm Production</a></li>
        <li><a href="">Farm Costs</a></li>
      </ul>
    </div>
  </div>

  
  <div class="app__container">
    <div class="farm-nav">
      <div class="farm-nav__item farm-nav__item--active">
        <div class="farm-nav__item-title">East Farm</div>
        <ul class="farm-nav__list">
          <li class="farm-nav__list-item">
            <div class="farm-nav__list-holder">
              <img src="./images/cow-sm.svg" class="farm-nav__list-icon">
            </div>
            <strong>12 457</strong> Cows
          </li>
          <li class="farm-nav__list-item">
            <div class="farm-nav__list-holder">
              <img src="./images/milk-bottle.svg" class="farm-nav__list-icon">
            </div>
            <strong>20 000 l</strong> 
            Monthly Milk Yield
          </li>
        </ul>
      </div>

      <div class="farm-nav__item">
        <div class="farm-nav__item-title">West Farm</div>
        <ul class="farm-nav__list">
          <li class="farm-nav__list-item">
            <div class="farm-nav__list-holder">
              <img src="./images/cow-sm.svg" class="farm-nav__list-icon">
            </div>
            <strong>25 657 </strong> Cows
          </li>
          <li class="farm-nav__list-item">
            <div class="farm-nav__list-holder">
              <img src="./images/milk-bottle.svg" class="farm-nav__list-icon">
            </div>
            <strong>45 000 l </strong> Monthly Milk Yield
          </li>
        </ul>
        <a href="" class="farm-nav__link-view">View Farm</a>
      </div>

      <div class="farm-nav__item">
          <div class="farm-nav__item-title">South Farm</div>
          <ul class="farm-nav__list">
            <li class="farm-nav__list-item">
              <div class="farm-nav__list-holder">
                <img src="./images/cow-sm.svg" class="farm-nav__list-icon">
              </div>
              <strong>6 296</strong> Cows
            </li>
            <li class="farm-nav__list-item">
              <div class="farm-nav__list-holder">
                <img src="./images/milk-bottle.svg" class="farm-nav__list-icon">
              </div>
              <strong>7 000 l</strong> Monthly Milk Yield
            </li>
          </ul>
          <a href="" class="farm-nav__link-view">View Farm</a>
      </div>

      <div class="farm-nav__item">
          <div class="farm-nav__item-title">North Farm</div>
          <ul class="farm-nav__list">
            <li class="farm-nav__list-item">
              <div class="farm-nav__list-holder">
                <img src="./images/cow-sm.svg" class="farm-nav__list-icon">
              </div>
              <strong>22 363</strong> Cows
            </li>
            <li class="farm-nav__list-item">
              <div class="farm-nav__list-holder">
                <img src="./images/milk-bottle.svg" class="farm-nav__list-icon">
              </div>
              <strong>40 000 l</strong> Monthly Milk Yield
            </li>
          </ul>
          <a href="" class="farm-nav__link-view">View Farm</a>
      </div>
    </div>
  </div>

        </div>
    </div>
    
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
      <!-- <script src="//cdn.jsdelivr.net/chartist.js/latest/chartist.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.3/Chart.min.js"></script> -->
      <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.2/moment.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.3/Chart.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@0.4.0/dist/chartjs-plugin-datalabels.min.js"></script>
      <script src="app.js"></script>
    
  </body>
</html>
