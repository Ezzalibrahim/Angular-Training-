import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router"; 
import { HomeComponent } from "./compononts/home/home.component";
import { TasksComponent } from "./compononts/tasks/tasks.component";
import { ProductsComponent } from "./compononts/products/products.component";

// TODO: create a routing for the app

const routes: Routes = [
    {
        path:'',
        component : HomeComponent
    },
    {
        path:'products',
        component : ProductsComponent
    }, 
    {
        path:'tasks',
        component : TasksComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports : [RouterModule]
})
export class AppRouterModule{

}