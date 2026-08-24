# Contentful SDK exists test

import pytest
from contentful_sdk import ContentfulSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = ContentfulSDK.test(None, None)
        assert testsdk is not None
