<?php
declare(strict_types=1);

// Contentful SDK utility: result_body

class ContentfulResultBody
{
    public static function call(ContentfulContext $ctx): ?ContentfulResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
