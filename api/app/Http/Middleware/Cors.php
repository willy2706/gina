<?php namespace App\Http\Middleware;
use Closure;

use Illuminate\Contracts\Routing\Middleware;
use Illuminate\Http\Response;

class Cors implements Middleware {

 /**
  * Handle an incoming request.
  *
  * @param \Illuminate\Http\Request $request
  * @param \Closure $next
  * @return mixed
  */
 public function handle($request, Closure $next)
 {
 	// return $next($request);
  return $next($request)->header('Access-Control-Allow-Origin' , 'http://www.e-gov-bandung.tk')
          ->header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE')
          ->header('Access-Control-Allow-Headers', 'Content-Type, Accept, Authorization, X-Requested-With');
 }
}