import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

//container
import { PassengerDashboardComponent } from "./containers/passenger-dashboard/passenger-dashboard.component";

//components
import { PassengerCountComponent } from "./components/passenger-count/passenger-count.component";
import { PassengerDetailComponent } from "./components/passenger-detail/passenger-detail.component";

//services
import { PassengerDashboardService } from "./passenger-dashboard.service";
import { PassengerViewerComponent } from "./containers/passenger-viewer/passenger-viewer.component";
//import { PassengerFormComponent } from "./components/passenger-form/passenger-form.component";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        PassengerDashboardComponent,
        PassengerCountComponent,
        PassengerDetailComponent,
        PassengerViewerComponent,
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule
    ],
    exports: [
        PassengerDashboardComponent,
    ],
    providers: [
        PassengerDashboardService
    ]
})
export class PassengerDashboardModule {}