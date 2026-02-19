import { HttpInterceptorFn } from '@angular/common/http';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {

  const token = localStorage.getItem('token');

  if(!token){
    return next(req);
  }

  let clone = req.clone({
    setHeaders:{
      Authorization : `Bearer ${token}`
    }
  })

  return next(clone);
};
