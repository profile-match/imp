import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
<div class="container body" style="width: 100%;"  >
      <div class="main_container" style="width: 100%;height: 100%;">
        

        <!-- top navigation -->
        <my-header>loading</my-header>
        <!-- /top navigation -->
        <!--
        <div class="col-md-3 left_col" style="left: 0px;">
          <my-menu>loading</my-menu>
        </div>
         -->
        <!-- page content -->
        <div class="right_col" role="main" >
          <!-- top tiles -->
          <creer-candidat>Loading ...</creer-candidat>
          <!-- /top tiles -->
            
        <!-- /page content -->

        <!-- footer content -->
      <!--   <footer style="bottom: 0px;">
        </footer>
        <!-- /footer content -->
      </div>
    </div>
    </div>
    `,
})
export class AppComponent {

}
