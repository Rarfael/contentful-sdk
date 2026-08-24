# Contentful SDK utility: make_context

from projectname_sdk.core.context import ContentfulContext


def make_context_util(ctxmap, basectx):
    return ContentfulContext(ctxmap, basectx)
