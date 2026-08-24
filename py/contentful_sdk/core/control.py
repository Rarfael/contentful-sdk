# Contentful SDK control

from __future__ import annotations


class ContentfulControl:
    def __init__(self, opts=None):
        if opts is None:
            opts = {}
        self.throw_err = opts.get("throw_err")
        self.err = None
        self.explain = opts.get("explain")
        # Per-call feature inputs (audit actor, paging cursor/page).
        self.actor = opts.get("actor")
        self.paging = opts.get("paging")
