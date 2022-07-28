<?php

namespace App\Controllers;

use CodeIgniter\RESTful\ResourceController;
use App\Models\ArticleModel;

class Article extends ResourceController
{
  	function __construct() {
      	header('Access-Control-Allow-Origin: *');
		header('Access-Control-Allow-Methods: GET, POST');
		header("Access-Control-Allow-Headers: X-Requested-With");
    	$this->ArticleModel = new ArticleModel();
  	}
  
    public function getAllArticle()
    {
      	$data = $this->ArticleModel->findAll();
		return $this->respond($data);
    }
  	public function getArticleById(){
      	$id = $this->request->uri->getSegment(2);
      	$data = $this->ArticleModel->find($id);
      	return $this->respond($data);
    }
  	public function updateArticle()
    {
      	$id = $this->request->uri->getSegment(2);
      	$input = $this->request->getVar();
      	$res = $this->ArticleModel->update($id, $input);
      	return $this->respond($res);
    }
  	public function createArticle()
    {
    	$input = $this->request->getVar();
      	$res = $this->ArticleModel->save($input);
      	return $this->respond($res);
    }
	public function deleteArticle()
    {
      	$id = $this->request->uri->getSegment(2);
      	$res = $this->ArticleModel->delete($id);
      	return $this->respond($res);
    }
}
