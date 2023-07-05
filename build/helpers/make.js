const fs = require('fs');
const path = require('path');
function makeFiles(folderName, name, props) {
    let mkDir = path.resolve(__dirname, '..', folderName);
    let readFromExample = (name) => {
        return fs
            .readFileSync(path.resolve(__dirname, 'example', name), 'utf8')
            .toString();
    };
    let replaceName = (content) => {
        let splitContent = content.split('\n');
        for (let i in splitContent) {
            if (splitContent[i].includes('from')) {
                splitContent[i] = splitContent[i].replace(/example./g, folderName + '.');
            }
        }
        content = splitContent.join('\n');
        content = content
            .replace(/@Controller('example')/, `@Controller('${name}')`)
            .replace(/example/g, name[0].toLowerCase() + name.slice(1, name.length))
            .replace(/Example/g, name);
        return content;
    };
    let writeProps = (content) => {
        let propsArea = '';
        for (let i in props) {
            propsArea += `@Prop(${props[i][1]})\n\t${i}:${props[i][0]};\n\n\t`;
        }
        return content.replace(/'props'/, propsArea);
    };
    let writeCreateDto = (content) => {
        let str = '';
        for (let i in props) {
            str += `@ApiProperty({ example: "${props[i][2]}" })\n\t${i}: ${props[i][0].length > 10 ? 'number' : props[i][0]};\n\n\t`;
        }
        return content.replace(/'dto'/, str);
    };
    let writeUpdateDto = (content) => {
        let str = '';
        for (let i in props) {
            str += `@ApiProperty({ example: "${props[i][2]}" })\n\t${i}?: ${props[i][0].length > 10 ? 'number' : props[i][0]};\n\n\t`;
        }
        return content.replace(/'dto'/, str);
    };
    try {
        fs.mkdirSync(mkDir);
    }
    catch (error) {
        console.log('Folder is already created.');
    }
    let controller = readFromExample('example.controller.ts');
    let module = readFromExample('example.module.ts');
    let service = readFromExample('example.service.ts');
    let schema = readFromExample('schemas/example.schema.ts');
    let createDtoFile = readFromExample('dto/create-example.dto.ts');
    let updateDtoFile = readFromExample('dto/update-example.dto.ts');
    try {
        fs.writeFileSync(mkDir + `/${folderName}.controller.ts`, replaceName(controller));
        console.log('Controller created');
    }
    catch (error) {
        console.log('Error while creating Controller');
    }
    try {
        fs.writeFileSync(mkDir + `/${folderName}.service.ts`, replaceName(service));
        console.log('Service created');
    }
    catch (error) {
        console.log('Error while writing Service');
    }
    try {
        fs.writeFileSync(mkDir + `/${folderName}.module.ts`, replaceName(module));
        console.log('Module created');
    }
    catch (error) {
        console.log('Error while writing Module');
    }
    try {
        try {
            fs.mkdirSync(mkDir + '/schemas');
            console.log('Schema created');
        }
        catch (error) {
            console.log('The Schema folder already exists');
        }
        fs.writeFileSync(mkDir + `/schemas/${folderName}.schema.ts`, writeProps(replaceName(schema)));
        console.log('Schema created');
    }
    catch (error) {
        console.log('Error while writing Schema');
    }
    try {
        fs.mkdirSync(mkDir + '/dto');
        console.log('Dto created');
    }
    catch (error) {
        console.log('The Dto folder already exists');
    }
    try {
        fs.writeFileSync(mkDir + `/dto/create-${folderName}.dto.ts`, writeCreateDto(replaceName(createDtoFile)));
        console.log('CreateDto created');
    }
    catch (error) {
        console.log('Error while writing CreateDto');
    }
    try {
        fs.writeFileSync(mkDir + `/dto/update-${folderName}.dto.ts`, writeUpdateDto(replaceName(updateDtoFile)));
        console.log('UpdateDto created');
    }
    catch (error) {
        console.log('Error while writing UpdateDto');
    }
}
makeFiles('admin', 'Admin', {
    fullname: ['string', '', ''],
    password: ['string', '', ''],
    email: ['string', '', ''],
    phone: ['string', '', ''],
    token: ['string', '', ''],
    description: ['string', '', ''],
    avatar: ['string', '', ''],
});
makeFiles('users', 'Users', {
    username: ['string', '', ''],
    password: ['string', '', ''],
    token: ['string', '', ''],
});
makeFiles('posts', 'Posts', {
    img: ['string', '', ''],
    title: ['string', '', ''],
    content: ['string', '', ''],
    tags: ['string', '', ''],
});
makeFiles('comments', 'Comments', {
    user_id: [
        'mongoose.Schema.Types.ObjectId',
        "[{ type: mongoose.Schema.Types.ObjectId, ref:'Users'  }]",
        '',
    ],
    post_id: [
        'mongoose.Schema.Types.ObjectId',
        "[{ type: mongoose.Schema.Types.ObjectId, ref:'Posts'  }]",
        '',
    ],
    content: ['string', '', ''],
    time: ['string', '', ''],
});
makeFiles('reactions', 'Reactions', {
    name: ['string', '', ''],
    img: ['string', '', ''],
});
makeFiles('post-reactions', 'PostReactions', {
    reaction_id: [
        'mongoose.Schema.Types.ObjectId',
        "[{ type: mongoose.Schema.Types.ObjectId, ref:'Reactions'  }]",
        '',
    ],
    post_id: [
        'mongoose.Schema.Types.ObjectId',
        "[{ type: mongoose.Schema.Types.ObjectId, ref:'Posts'  }]",
        '',
    ],
    user_id: [
        'mongoose.Schema.Types.ObjectId',
        "[{ type: mongoose.Schema.Types.ObjectId, ref:'Users'  }]",
        '',
    ],
    quantity: ['number', '', ''],
});
makeFiles('description', 'Description', {
    title: ['string', '', ''],
    description: ['string', '', ''],
});
makeFiles('projects', 'Projects', {
    description_id: [
        'mongoose.Schema.Types.ObjectId',
        "[{ type: mongoose.Schema.Types.ObjectId, ref:'Description'  }]",
        '',
    ],
    title: ['string', '', ''],
    preview: ['string', '', ''],
    demo: ['string', '', ''],
});
makeFiles('images', 'Images', {
    project_id: [
        'mongoose.Schema.Types.ObjectId',
        "[{ type: mongoose.Schema.Types.ObjectId, ref:'Projects'  }]",
        '',
    ],
    title: ['string', '', ''],
    img: ['string', '', ''],
});
makeFiles('addresses', 'Addresses', {
    name: ['string', '', ''],
    address: ['string', '', ''],
    icon: ['string', '', ''],
});
makeFiles('skills', 'Skills', {
    title: ['string', '', ''],
    icon: ['string', '', ''],
    rating: ['string', '', ''],
});
makeFiles('education', 'Education', {
    name: ['string', '', ''],
    time: ['string', '', ''],
});
//# sourceMappingURL=make.js.map