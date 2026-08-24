<?php
declare(strict_types=1);

// Contentful SDK utility: prepare_body

class ContentfulPrepareBody
{
    public static function call(ContentfulContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
