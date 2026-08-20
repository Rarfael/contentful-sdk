import { ContentfulEntityBase } from '../ContentfulEntityBase';
import type { ContentfulSDK } from '../ContentfulSDK';
import type { Control } from '../types';
import type { Entry, EntryLoadMatch, EntryListMatch, EntryCreateData, EntryUpdateData, EntryRemoveMatch } from '../ContentfulTypes';
declare class EntryEntity extends ContentfulEntityBase<Entry> {
    constructor(client: ContentfulSDK, entopts: any);
    make(this: EntryEntity): EntryEntity;
    load(this: any, reqmatch?: EntryLoadMatch, ctrl?: Control): Promise<EntryEntity>;
    list(this: any, reqmatch?: EntryListMatch, ctrl?: Control): Promise<EntryEntity[]>;
    create(this: any, reqdata?: EntryCreateData, ctrl?: Control): Promise<EntryEntity>;
    update(this: any, reqdata?: EntryUpdateData, ctrl?: Control): Promise<EntryEntity>;
    remove(this: any, reqmatch?: EntryRemoveMatch, ctrl?: Control): Promise<EntryEntity>;
}
export { EntryEntity };
