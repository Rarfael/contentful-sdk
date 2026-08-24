<?php
declare(strict_types=1);

// Contentful SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class ContentfulMakeContext
{
    public static function call(array $ctxmap, ?ContentfulContext $basectx): ContentfulContext
    {
        return new ContentfulContext($ctxmap, $basectx);
    }
}
