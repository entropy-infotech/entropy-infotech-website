import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { StudentPlaygroundComponent } from './pages/student-playground/student-playground.component';
import { CareersComponent } from './pages/careers/careers.component';
import { UserAuthComponent } from './pages/user-auth/user-auth.component';

import { WebDevelopmentComponent } from './pages/services/web-development/web-development.component';
import { AnalyticsDashboardsComponent } from './pages/services/analytics-dashboards/analytics-dashboards.component';
import { GraphicDesignComponent } from './pages/services/graphic-design/graphic-design.component';

import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { CreateBlogComponent } from './admin/create-blog/create-blog.component';
import { ManageBlogComponent } from './admin/manage-blog/manage-blog.component';
import { ClientDashboardComponent } from './client/dashboard/dashboard.component';

import { adminGuard } from './guards/admin.guard';
import { clientGuard } from './guards/client.guard';
import { unsavedChangesGuard } from './guards/unsaved-changes.guard';
import { FrontendInternComponent } from './pages/careers/internships/frontend-intern/frontend-intern.component';
import { UiUxInternComponent } from './pages/careers/internships/ui-ux-intern/ui-ux-intern.component';
import { BackendInternComponent } from './pages/careers/internships/backend-intern/backend-intern.component';
import { PythonInternComponent } from './pages/careers/internships/python-intern/python-intern.component';
import { SeoInternComponent } from './pages/careers/internships/seo-intern/seo-intern.component';
import { ApplyFormComponent } from './pages/careers/apply-form/apply-form.component';

import { ManageMessagesComponent } from './admin/manage-messages/manage-messages.component';
import { ManageClientsComponent } from './admin/manage-clients/manage-clients.component';
import { ManageApplicationsComponent } from './admin/manage-applications/manage-applications.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'student-playground', component: StudentPlaygroundComponent },
  { path: 'careers', component: CareersComponent },
  {
    path: 'careers/internships/frontend-developer',
    component: FrontendInternComponent,
  },
  {
    path: 'careers/internships/ui-ux-designer',
    component: UiUxInternComponent,
  },
  {
    path: 'careers/internships/backend-developer',
    component: BackendInternComponent,
  },
  {
    path: 'careers/internships/python-developer',
    component: PythonInternComponent,
  },
  { path: 'careers/internships/seo-specialist', component: SeoInternComponent },
  { path: 'careers/apply', component: ApplyFormComponent },
  { path: 'login', component: UserAuthComponent },

  { path: 'services/web-development', component: WebDevelopmentComponent },
  {
    path: 'services/analytics-dashboards',
    component: AnalyticsDashboardsComponent,
  },
  { path: 'services/graphic-design', component: GraphicDesignComponent },
  { path: 'admin-login', component: AdminLoginComponent },

  // Admin Routes - Protected by adminGuard
  {
    path: 'admin',
    canActivate: [adminGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      {
        path: 'create-blog',
        component: CreateBlogComponent,
        canDeactivate: [unsavedChangesGuard],
      },
      {
        path: 'edit-blog/:id',
        component: CreateBlogComponent,
        canDeactivate: [unsavedChangesGuard],
      },
      { path: 'manage-blog', component: ManageBlogComponent },
      { path: 'manage-messages', component: ManageMessagesComponent },
      { path: 'manage-clients', component: ManageClientsComponent },
      { path: 'manage-applications', component: ManageApplicationsComponent },
    ],
  },

  // Client Routes - Protected by clientGuard
  {
    path: 'client',
    canActivate: [clientGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: ClientDashboardComponent },
    ],
  },

  { path: '**', redirectTo: '' },
];
