const SeparatorTitle = " - ";
const MaxLenghtTitle = 60;
const MaxLenghtSlug = 45;
const MaxLenghtDescription = 170;
function GenerateSlug(title){
    var slug = RemoveAccent(title).toLowerCase();
    console.log('1 Slug : '+slug);
    slug = slug.replace('\[^a-z0-9-\u0600-\u06FF]\gm','-');
    console.log('2 Slug : '+slug);
    slug = slug.replace('\s+','-').trim();
    console.log('3 Slug : '+slug);
    slug = slug.replace('-+','-');
    console.log('4 Slug : '+slug);

    //            slug = slug.Substring(0, slug.Length <= MaxLenghtSlug ? slug.Length : MaxLenghtSlug).Trim();

    //multiple regex
}