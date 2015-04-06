<?php namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Photo;
use Request;
 
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;
use Illuminate\Http\Response;

class PhotoController extends Controller {

	public function index() {
		$entries = Photo::all();
		
		return view('index', compact('entries'));
	}
	
	public function add() {
		$file = Request::file('filefield');
		$extension = $file->getClientOriginalExtension();
		Storage::disk('local')->put($file->getClientOriginalName(), File::get($file));
		$entry = new Photo();
		$entry->mime = $file->getClientMimeType();
		$entry->original_filename = $file->getClientOriginalName();
		$entry->filename = $file->getClientOriginalName();
		
		$entry->save();
		
		return redirect('fileentry');
	}

	public function get($filename) {
		$entry = Photo::where('filename', '=', $filename)->firstOrFail();
		$file = Storage::disk('local')->get($entry->filename);
		
		return (new Response($file, 200))->header('Content-Type', $entry->mime);
	}

}
