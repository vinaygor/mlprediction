/**
 * AngularJS module to process a form.
 */

 var storeListOptions = [['air_764f71040a413d4d',
    'air_10bbe8acd943d8f6'],
   ['air_c8265ecc116f2284',
   'air_c26f027b5bc1f081',
   'air_7a81bd7fadcbf3d8',
   'air_60aa54ecbc602348',
   'air_8e429650fcf7a0ae',
   'air_df843e6b22e8d540',
   'air_df5cf5cd03eb68d0',
   'air_e524c6a9e06cc3a1',
   'air_fdcfef8bd859f650',
   'air_abf06fcca748dca5',
   'air_d138b593ebda55cc',
   'air_1ae94f514a0bce13',
   'air_c9f6de13be8b8f25',
   'air_a1fe8c588c8d2f30',
   'air_16cf0a73233896de',
   'air_c92745dfdd2ec68a',
   'air_f957c6d6467d4d90',
   'air_4f762e840b3996e1',
   'air_d44d210d2994f01b',
   'air_c759b6abeb552160',
   'air_5c7489c9ec755e2d',
   'air_52a08ef3efdb4bb0',
   'air_37189c92b6c761ec',
   'air_87078cf7903a648c',
   'air_5e939e005bd34633',
   'air_8764b3473ddcceaf',
   'air_4c2ed28f3f19ca52',
   'air_2ac361b97630e2df',
   'air_b8925441167c3152',
   'air_22682e965418936f',
   'air_aa0049fe3cc6f4d6',
   'air_3b6438b125086430',
   'air_2a485b92210c98b5',
   'air_ba495cccc8f0f237',
   'air_81546875de9c8e78',
   'air_bd74a9222edfdfe1',
   'air_61668cc2b0778898',
   'air_220cba70c890b119',
   'air_8d50c64692322dff',
   'air_87059630ab6fe47f',
   'air_a510dcfe979f09eb',
   'air_dabfbd0ec951925a',
   'air_712dd258f7f91b4b',
   'air_9105a29b0eb250d2',
   'air_85bd13a49370c392',
   'air_2b9bc9f5f5168ea1',
   'air_2a184c1745274b2b',
   'air_f3f9824b7d70c3cf',
   'air_fc477473134e9ae5',
   'air_b88192b35ac03c24',
   'air_d477b6339b8ce69f',
   'air_f6b2489ccf873c3b',
   'air_cb25551c4cd8d9f3',
   'air_6a15e4eae523189d',
   'air_36bcf77d3382d36e',
   'air_cfdeb326418194ff',
   'air_1ab60ce33bfed8a8',
   'air_7c7774c66fb237f7',
   'air_536043fcf1a4f8a4',
   'air_709262d948dd0b6e',
   'air_70e9e8cd55879414',
   'air_49211568cab5fdee',
   'air_d473620754bf9fc2',
   'air_f88898cd09f40496',
   'air_c3dcaf3aeb18e20e',
   'air_3bd49f98ab7f36ab',
   'air_5cfc537125d97f16',
   'air_61de73b097513f58',
   'air_8c3175aa5e4fc569',
   'air_728ff578acc6ac6e',
   'air_93ebe490d4abb8e9',
   'air_fff68b929994bfbd',
   'air_883ca28ef0ed3d55',
   'air_79afb3f52b4d062c',
   'air_1f7f8fa557bc0d55',
   'air_4c665a2bfff0da3b',
   'air_735bcbe1763d6e98',
   'air_5afb1cca48ceaa19',
   'air_287d2de7d3c93406'],
   ['air_c225148c0fcc5c72',
   'air_a33461f4392ec62c',
   'air_55390f784018349a',
   'air_6902e4ec305b3d08',
   'air_2f8ced25216df926',
   'air_c9ed65554b6edffb',
   'air_9828505fefc77d75',
   'air_9bf0ccac497c4af3',
   'air_ac7a7427c9ae12a5',
   'air_6c91a28278a16f64',
   'air_c77ee2b7d36da265',
   'air_6e64fb5821402cd2',
   'air_ef47430bcd6f6a89',
   'air_602ca92c0db34f8f',
   'air_e57dd6884595f60d',
   'air_dbf64f1ce38c7442',
   'air_1dea9815ccd36620',
   'air_3aa839e8e0cb6c87',
   'air_38746ffe9aa20c7e',
   'air_4b55d8aea1d2b395',
   'air_349278fa964bb12f',
   'air_c31472d14e29cee8',
   'air_7bda6048a4a78837',
   'air_eb120e6d384a17a8',
   'air_eca5e0064dc9314a',
   'air_ad13e71e21235131',
   'air_9e920b758503ef54',
   'air_27e991812b0d9c92',
   'air_0ead98dd07e7a82a',
   'air_bf13014b6e3e60ca',
   'air_6108821ffafa9b72',
   'air_3a8a3f8fb5cd7f88',
   'air_91236b89d29567af',
   'air_859feab8e3c9f98d',
   'air_b7fa3d2fca744dd2',
   'air_59cc9b2b209c6331',
   'air_939964477035ef0b',
   'air_a9a380530c1e121f',
   'air_1d3f797dd1f7cf1c',
   'air_c28983412a7eefcf',
   'air_9b13c7feb0a0c431',
   'air_168441ada3e878e1',
   'air_d0e8a085d8dc83aa',
   'air_cadf9cfb510a1d78',
   'air_2195cd5025a98033',
   'air_832f9dbe9ee4ebd3',
   'air_401b39f97e56b939',
   'air_d4981cdde163b172',
   'air_aed3a8b49abe4a48',
   'air_8e4360a64dbd4c50',
   'air_9a30407764f4ff84',
   'air_5e34c6fe6fabd10e',
   'air_b5bdd318005d9aa4',
   'air_710d6537cb7623df',
   'air_5ed3198e4a5eed0f',
   'air_c6ffd6a93e6b68d6',
   'air_ebd31e812960f517',
   'air_10713fbf3071c361',
   'air_7bc6ca04d7b0f3b8',
   'air_e34c631c766f2766',
   'air_af24e3e817dea1e5',
   'air_b30fffd7ab1e75a5',
   'air_a8533b7a992bb0ca',
   'air_efd70b04de878f25',
   'air_e7d2ac6d53d1b744',
   'air_8e8f42f047537154',
   'air_657a0748462f85de',
   'air_9d3482b4680aee88',
   'air_e0aee25b56a069f2',
   'air_5d945ade487cdf4d',
   'air_848616680ef061bd',
   'air_97e0f2feec4d577a',
   'air_57ed725a1930a5b9',
   'air_8c119d1f16049f20',
   'air_2009041dbf9264de',
   'air_820d1919cbecaa0a',
   'air_9d5a980b211e1795',
   'air_16179d43b6ee5fd8',
   'air_93dd7070c9bf5453'],
   [ 'air_bdd32aa407c16335',
     'air_a88ac559064dec08',
     'air_457efe8c3a30ea17',
     'air_d0a1e69685259c92',
     'air_90213bcae4afa274',
     'air_9aa92007e3628dbc',
     'air_9dc9483f717d73ee',
     'air_64a5d5c1381837af',
     'air_b711b43ae472cb6b',
     'air_43d577e0c9460e64',
     'air_2fc149abe33adcb4',
     'air_f267dd70a6a6b5d3',
     'air_4c727b55acdee495'
   ],[
     'air_fdc02ec4a3d21ea4',
     'air_35c4732dcbfe31be',
     'air_3ac24136722e2291',
     'air_cbe139af83feb388',
     'air_9ae7081cb77dc51e',
     'air_2e7cb1f1a2a9cd6a',
     'air_64d4491ad8cdb1c6',
     'air_88c8e34baa79217b',
     'air_6b7678aae65d2d59',
     'air_87467487d21891dd',
     'air_ba937bf13d40fb24',
     'air_c5459218282bedd5',
     'air_fe22ef5a9cbef123',
     'air_901925b628677c2e',
     'air_1e665503b8474c55',
     'air_25c583983246b7b0',
     'air_0585011fa179bcce',
     'air_e01d99390355408d',
     'air_68147db09287bf74',
     'air_383f5b2f8d345a49',
     'air_7e12c5d27f44a8de',
     'air_7ef9a5ea5c8fe39f',
     'air_8b4a46dc521bfcfe',
     'air_db80363d35f10926',
     'air_c6aa2efba0ffc8eb',
     'air_6d64dba2edd4fc0c',
     'air_9ca2767761efff4d',
     'air_dea0655f96947922',
     'air_81c5dff692063446',
     'air_dc0e080ba0a5e5af',
     'air_cf2229e64408d9fe',
     'air_c6a164dd4060e960',
     'air_16c4cfddeb2cf69b',
     'air_fcd4492c83f1c6b9',
     'air_d4d218b451f82c3d',
     'air_707d4b6328f2c2df',
     'air_e1b76fcb5208fb6b',
     'air_9f277fb7a2c1d842',
     'air_465bddfed3353b23',
     'air_cd5f54969be9ed08',
     'air_ab3ae0e410b20069',
     'air_97958e7fce98b6a3',
     'air_bfda7731a6c6fc61',
     'air_df507aec929ce5f6',
     'air_e657ca554b0c008c',
     'air_b4f32bcc399da2b9',
     'air_af03c277a167b2bd',
     'air_43b65e4b05bff2d3',
     'air_256be208a979e023',
     'air_d00161e19f08290b',
     'air_fd154088b1de6fa7',
     'air_15ae33469e9ea2dd',
     'air_1e23210b584540e7',
     'air_fa4ffc9057812fa2',
     'air_a21ffca0bea1661a',
     'air_4481a87c1d7c9896',
     'air_629edf21ea38ac2d',
     'air_b192fb5310436005',
     'air_99b01136f451fc0e',
     'air_bed603c423b7d9d4',
     'air_0768ab3910f7967f',
     'air_5b704df317ed1962',
     'air_db4b38ebe7a7ceff',
     'air_32460819c7600037',
     'air_86f7b2109e4abd65',
     'air_1979eaff8189d086',
     'air_0845d8395f30c6bb',
     'air_473f98b212d37b4a',
     'air_bebd55ed63ab2422',
     'air_20add8092c9bb51d',
     'air_a24bf50c3e90d583',
     'air_9a6f6e7f623003d2',
     'air_87f9e1024b951f01',
     'air_f3602e4fa2f12993',
     'air_91beafbba9382b0a',
     'air_9efaa7ded03c5a71',
     'air_375a5241615b5e22',
     'air_ef789667e2e6fe96',
     'air_234d3dbf7f3d5a50',
     'air_f593fa60ac3541e2',
     'air_57013002b912772b',
     'air_bb26d6d079594414',
     'air_15e6e15c7ea2c162',
     'air_35512c42db0868da',
     'air_88f31db64991768a',
     'air_5bd22f9cc1426a90',
     'air_7dacea2f22afccfb',
     'air_caf996ac27206301',
     'air_84060403939d8216',
     'air_b23d0f519291247d',
     'air_ade6e836ffd1da64',
     'air_09661c0f3259cc04',
     'air_10393f12e9069760',
     'air_eeeadee005c006a2',
     'air_138ff410757b845f',
     'air_397d3f32a7196aa2',
     'air_0328696196e46f18',
     'air_4cab15ad29c0ffbc',
     'air_c3bc011cca3bec65',
     'air_396942e6423a2145',
     'air_bbe1c1a47e09f161',
     'air_b5598d12d1b84890',
     'air_36429b5ca4407b3e',
     'air_32c61b620a766138',
     'air_b2d8bc9c88b85f96',
     'air_4b380b4db9d37883',
     'air_3982a2c4ea2ed431',
     'air_6836438b543ba698',
   ],
   [
     'air_6b65745d432fd77f',
     'air_9bf595ef095572fb'
   ],[
     'air_0f0cdeee6c9bf3d7',
     'air_7cc17a324ae5c7dc',
     'air_fee8dcf4d619598e',
     'air_a17f0778617c76e2',
     'air_83db5aff8f50478e',
     'air_99c3eae84130c1cb',
     'air_f183a514cb8ff4fa',
     'air_6b9fa44a9cf504a1',
     'air_0919d54f0c9a24b8',
     'air_2c6c79d597e48096',
     'air_0164b9927d20bcc3',
     'air_681f96e6a6595f82',
     'air_ef920fa6f4b085f6',
     'air_d3e7b5952cd09ccb',
     'air_e64de0a6bf0739af',
     'air_4ce7b17062a1bf73',
     'air_290e7a57b390f78e',
     'air_4579cb0669fd411b',
     'air_63a750d8b4b6a976',
     'air_9438d67241c81314',
     'air_929d8513e3cdb423',
     'air_6c1128955c58b690',
     'air_638c35eb25e53eea',
     'air_a7404a854919e990',
     'air_f6cdaf7b7fdc6d78',
     'air_df9355c47c5df9d3',
     'air_bf617aa68d5f1cfa',
     'air_a218912784bf767d',
     'air_506fe758114df773',
     'air_0b9038300f8b2b50',
     'air_3440e0ea1b70a99b',
     'air_722297e7f26db91d',
     'air_fcfbdcf7b1f82c6e',
     'air_f8233ad00755c35c',
     'air_d186b2cb0b9ce022',
     'air_e76a668009c5dabc',
     'air_7fbf7649eb13ad9b',
     'air_b439391e72899756',
     'air_681b0c56328dd2af',
     'air_938ef91ecdde6878',
     'air_f911308e19d64236',
     'air_650f9b9de0c5542c',
     'air_632ba66e1f75aa28',
     'air_8e492076a1179383',
     'air_0867f7bebad6a649',
     'air_9d93d95720f2e831',
     'air_900d755ebd2f7bbd',
     'air_dfe068a1bf85f395',
     'air_ea7c16131980c837',
     'air_97b2a9f975fc702c',
     'air_ccd19a5bc5573ae5',
     'air_40953e2d8b4f2857',
     'air_c0385db498b391e5',
     'air_082908692355165e',
     'air_6cbe54f0aa30b615',
     'air_2a7f14da7fe0f699',
     'air_31c753b48a657b6c',
     'air_483eba479dc9910d',
     'air_9cd5e310f488bced',
     'air_d00a15343325e5f7',
     'air_228f10bec0bda9c8',
     'air_6b2268863b14a2af',
     'air_8f13ef0f5e8c64dd',
     'air_48f4da6223571da4',
     'air_9d452a881f7f2bb7',
     'air_55c3627912b9c849',
     'air_6b15edd1b4fbb96a',
     'air_6d65542aa43b598b',
     'air_2c6fef1ce0e13a5a',
     'air_ca957d3a1529fbd3',
     'air_d6b3e67261f07646',
     'air_968d72c12eed09f0',
     'air_ecf7f141339f1d57',
     'air_56cd12f31a0afc04',
     'air_73f316e6a18d8aa9',
     'air_310e467e6e625004',
     'air_3b20733899b5287f',
     'air_d63cfa6d6ab78446',
     'air_e3020992d5fe5dfd',
     'air_9152d9926e5c4a3a',
     'air_1509881b22965b34',
     'air_08ef81d5b7a0d13f',
     'air_42c9aa6d617c5057',
     'air_645cb18b33f938cf',
     'air_831658500aa7c846',
     'air_a49f1cf0634f13e5',
     'air_c88467d88b2c8ecd',
     'air_00a91d42b08b08d9',
     'air_d1f20424f76cc78e',
     'air_32f5d7cd696e3c4a',
     'air_40f6193ea3ed1b91',
     'air_4092cfbd95a3ac1b',
     'air_399904bdb7685ca0',
     'air_baf28ac9f13a307d',
     'air_2a3743e37aab04b4',
     'air_3561fd1c0bce6a95',
     'air_4e1c38f68f435596',
     'air_d54d6fcb116fbed3',
     'air_eb2d2653586315dd',
     'air_142e78ba7001da9c',
     'air_bfafaed35e213fd7',
     'air_fa12b40b02fecfd8'
   ],[
     'air_56cebcbd6906e04c',
     'air_4beac252540f865e',
     'air_63a88d81295195ed',
     'air_86cfbf2624576fad',
     'air_96929a799b12a43e',
     'air_d69b08a175bc0387',
     'air_fd6aac1043520e83',
     'air_9483d65e9cc9a6b7',
     'air_ffcc2d5087e1b476',
     'air_c66dbd2c37832d00',
     'air_a11473cc1eb9a27f',
     'air_e0118664da63a2d0',
     'air_5878b6f2a9da12c1',
     'air_af63df35857b16e6',
     'air_5a9a6cbeeb434c08',
     'air_05c325d315cc17f5',
     'air_cb7467aed805e7fe',
     'air_b2a639cc7e02edf1',
     'air_e053c561f32acc28',
     'air_a257c9749d8d0ff6',
     'air_abcdc8115988a010',
     'air_db1233ad855b34d5',
     'air_1408dd53f31a8a65',
     'air_c2c8435bdb3516d4',
     'air_e88bbe2ede3467aa',
     'air_91d72e16c4bcba55',
     'air_48e9fc98b62495a7',
     'air_6ced51c24fb54262',
     'air_1d25ca6c76df48b4',
     'air_6411203a47b5ec77',
     'air_8cc350fd70ee0757',
     'air_cc1a0e985ce63711',
     'air_5c817ef28f236bdf',
     'air_87ca98aa7664de94',
     'air_f6bfd27e2e174d16',
     'air_b9e27558fb8bd5c4',
     'air_229d7e508d9f1b5e',
     'air_68301bcb11e2f389',
     'air_1033310359ceeac1',
     'air_084d98859256acf0',
     'air_4d21676ed11f0bac',
     'air_b60cc7d6aee68194',
     'air_ecab54b57a71b10d',
     'air_03963426c9312048',
     'air_c47aa7493b15f297',
     'air_97159fc4e90053fe',
     'air_f96765e800907c77',
     'air_28a9fa1ec0839375',
     'air_421670f21da5ba31',
     'air_1707a3f18bb0da07',
     'air_646b93e336f0dded',
     'air_de88770300008624',
     'air_e7fbee4e3cfe65c5',
     'air_0b1e72d2d4422b20',
     'air_ee3ba9af184c6c82',
     'air_5f3a3ef4cba110a4',
     'air_9d474ec2448c700d',
     'air_5cb030b9f0b91537',
     'air_1d1e8860ae04f8e9',
     'air_8f3b563416efc6ad',
     'air_48ffd31594bc3263',
     'air_f26f36ec4dc5adb0',
     'air_2570ccb93badde68',
     'air_28064154614b2e6c',
     'air_2634e41551e9807d',
     'air_640cf4835f0d9ba3',
     'air_f2985de32bb792e0',
     'air_81a12d67c22e012f',
     'air_965b2e0cf4119003',
     'air_d500b48a8735fbd3',
     'air_a271c9ba19e81d17',
     'air_fbadf737162a5ce3',
     'air_c1ff20617c54fee7',
     'air_7831b00996701c0f',
     'air_04cae7c1bc9b2a0b',
     'air_bc9a129e11a2efe0',
     'air_72f5146cf0c49beb',
     'air_bb09595bab7d5cfb',
     'air_cfcc94797d2b5d3d',
     'air_754ae581ad80cc9f',
     'air_8523d6a70de49e6c',
     'air_bcce1ea4350b7b72',
     'air_2d3afcb91762fe01',
     'air_066f0221b8a4d533',
     'air_ca6ae8d49a2f1eaf',
     'air_de692863bb2dd758',
     'air_947eb2cae4f3e8f2',
     'air_b1bb1fae86617d7a',
     'air_51281cd059d7b89b',
     'air_df554c4527a1cfe6',
     'air_622375b4815cf5cb',
     'air_61b8d37c33617f21',
     'air_cbe867adcf44e14f',
     'air_09a845d5b5944b01',
     'air_789466e488705c93',
     'air_bc991c51d6613745',
     'air_2703dcb33192b181',
     'air_06f95ac5c33aca10',
     'air_258ad2619d7bff9a',
     'air_e42bdc3377d1eee7',
     'air_90bd5de52c166767',
     'air_fb44f566d4f64a4e',
     'air_4d90a22572fa1ec9',
     'air_c1d5d165c055b866',
     'air_08ba8cd01b3ba010',
     'air_a55d17bd3f3033cb',
     'air_4433ab8e9999915f',
     'air_3bb99a1fe0583897',
     'air_e700e390226d9985',
     'air_a083834e7ffe187e',
     'air_3980af67be35afdb',
     'air_950381108f839348',
     'air_77dfc83450cbc89c',
     'air_990a642a3deb2903',
     'air_6607fe3671242ce3',
     'air_54ed43163b7596c4',
     'air_9aa32b3db0fab3a5',
     'air_546b353cbea4a45b',
     'air_4feeb8600f131e43',
     'air_614e2f7e76dff854',
     'air_f0c7272956e62f12',
     'air_324f7c39a8410e7c',
     'air_6b942d5ebbc759c2',
     'air_3e6cea17a9d2c0f1',
     'air_08cb3c4ee6cd6a22',
     'air_7f9e15afafcf4c75',
     'air_e55abd740f93ecc4',
     'air_21f5052d5330528d',
     'air_e00fe7853c0100d6',
     'air_ad7777590c884721',
     'air_90ed0a2f24755533',
     'air_e89735e80d614a7e',
     'air_675aa35cba456fd1',
     'air_2c989829acbd1c6b',
     'air_a38f25e3399d1b25',
     'air_f1f9027d4fa8f653',
     'air_b3180b74332ba886',
     'air_60a7057184ec7ec7',
     'air_04341b588bde96cd',
     'air_bf7591560077332d',
     'air_0241aa3964b7f861',
     'air_f068442ebb6c246c',
     'air_b2d97bd2337c5ba7',
     'air_915558a55c2bc56c',
     'air_ec0fad2def4dcff0',
     'air_326ca454ef3558bc',
     'air_5f6fa1b897fe80d5',
     'air_629d9935273c82ae',
     'air_9b6af3db40da4ae2',
     'air_e5cf003abcc5febb',
     'air_eda179770dfa9f91',
     'air_96773a6236d279b1',
     'air_51319e7acf0438cf',
     'air_eec5e572b9eb9c23',
     'air_54d6c25d33f5260e',
     'air_9241121af22ff1d6',
     'air_5acc13d655a6e8b2',
     'air_b8d9e1624baaadc2',
     'air_789103bf53b8096b',
     'air_17a6ab40f97fd4d8',
     'air_8110d68cc869b85e',
     'air_ea6d0c3acf00b22a',
     'air_81bd68142db76f58',
     'air_33b01025210d6007',
     'air_1c95a84924d72500',
     'air_4570f52104fe0982',
     'air_4cca5666eaf5c709',
     'air_90f0efbb702d77b7',
     'air_1ba4e87ef7422183',
     'air_97cf68dc1a9beac0',
     'air_c3585b0fba3998d0',
     'air_3c05c8f26c611eb9',
     'air_f0fb0975bdc2cdf9',
     'air_6e3fd96320d24324',
     'air_8ec47c0f1e2c879e',
     'air_ced6297e5bdf5130',
     'air_7d65049f9d275c0d',
     'air_a563896da3777078',
     'air_d1418d6fd6d634f2',
     'air_7cf5a02c0e01b647',
     'air_6ca1d941c8199a67',
     'air_5d7c744c3a2ef624',
     'air_28dbe91c4c9656be',
     'air_99a5183695b849f9',
     'air_5485912b44f976de',
     'air_25e9888d30b386df',
     'air_4cab91146e3d1897',
     'air_152c1f08d7d20e07',
     'air_346ade7d29230634',
     'air_800c02226e2e0288',
     'air_c027e2b560442808',
     'air_96005f79124e12bf',
     'air_4de6d887a7b1c1fc',
     'air_0f2f96335f274801',
     'air_32b02ba5dc2027f4',
     'air_93b9bb641f8fc982',
     'air_39dccf7df20b1c6a'
   ],[
     'air_4d71826793c09b22',
     'air_876d7a23c47811cb',
     'air_b3a824511477a4ed',
     'air_877f79706adbfb06',
     'air_671b4bea84dafb67',
     'air_b2395df0e874078d',
     'air_4b9085d0d46a6211',
     'air_3c938075889fc059',
     'air_049f6d5b402a31b2',
     'air_c8a657c8c5c93d69',
     'air_a304330715435390',
     'air_1dd8f6f47480d1a2',
     'air_7bacc4d36fb094c9',
     'air_3cad29d1a23209d2',
     'air_a9178f19da58fe99',
     'air_f9168b23fdfc1e52',
     'air_bf21b8350771879b',
     'air_e0f241bd406810c0',
     'air_4974785f48853db9',
     'air_9352c401d5adb01b',
     'air_96743eee94114261',
     'air_3155ee23d92202da',
     'air_9387ff95e886ebc7',
     'air_1f34e9beded2231a',
     'air_f690c42545146e0a',
     'air_cc35590cd1da8554',
     'air_3d3a2b509180e798',
     'air_7db266904cb0d72a',
     'air_1eeff462acb24fb7',
     'air_472b19e3b5bffa41',
     'air_1f1390a8be2272b3',
     'air_8a1d21fad48374e8',
     'air_84f6876ff7e83ae7',
     'air_eca4a5a191e8d993',
     'air_539d693f7317c62d',
     'air_de803f7e324936b8',
     'air_673acd9fa5e0dd78',
     'air_931a8a4321b6e7d1',
     'air_0b184ec04c741a6a',
     'air_dad0b6a36138f309',
     'air_e8ed9335d0c38333',
     'air_609050e4e4f79ae1',
     'air_68cc910e7b307b09',
     'air_eb20a89bba7dd3d0',
     'air_473cf23b9e7c0a37',
     'air_67f87c159d9e2ee2',
     'air_f2c5a1f24279c531',
     'air_47070be6093f123e',
     'air_63e28ee0b0c955a7',
     'air_2d78d9a1f4dd02ca',
     'air_c4fa5c562d5409ca',
     'air_24b9b2a020826ede',
     'air_75bd5d1b6dc6670d',
     'air_573ecdf81b157d22',
     'air_55e11c33d4758131',
     'air_bb4ff06cd661ee9b',
     'air_88ca84051ba95339',
     'air_b2dcec37b83e2494',
     'air_68c1de82037d87e6',
     'air_347be2c4feeb408b',
     'air_258dc112912fc458',
     'air_683371d9baabf410',
     'air_fef9ccb3ba0da2f7'
   ],[
     'air_7514d90009613cd6',
     'air_c8fe396d6c46275d'
   ],[
     'air_694571ea13fb9e0e',
     'air_f927b2da69a82341',
     'air_6ff5fca957798daa',
     'air_75864c80d2fb334a',
     'air_c7f78b4f3cba33ff',
     'air_07b314d83059c4d2',
     'air_7420042ff75f9aca',
     'air_1c0b150f9e696a5f',
     'air_8d61f49aa0373492',
     'air_2b8b29ddfd35018e',
     'air_e270aff84ac7e4c8',
     'air_3e93f3c81008696d',
     'air_7f3dc18494bce98b',
     'air_670a0c1c4108bcea'
   ],[
     'air_eb5788dba285e725',
     'air_e2208a79e2678432',
     'air_4b251b9f8373f1ae',
     'air_c8c0ef02ed72053f',
     'air_cb935ff8610ba3d3',
     'air_9cf2f1ba86229773',
     'air_07bb665f9cdfbdfb',
     'air_3caef3f76b8f26c5',
     'air_5c65468938c07fa5',
     'air_2c505f9ad67d4635',
     'air_b28bed4b2e7167b7',
     'air_efc80d3f96b3aff7',
     'air_77488fa378cf98c3',
     'air_9fc607777ad76b26',
     'air_2fed81034f8834e5',
     'air_65e294f1ae6df9c3',
     'air_e0e69668214ff972',
     'air_fea5dc9594450608',
     'air_a678e5b144ca24ce',
     'air_c7d30ab0e07f31d5',
     'air_8a906e5801eac81c',
     'air_efef1e3daecce07e',
     'air_26f10355d9b4d82a',
     'air_4254c3fc3ad078bd',
     'air_82a6ae14151953ba',
     'air_24e8414b9b07decb',
     'air_5e339a1f364cdb00'
   ],[
     'air_d07e57b21109304a',
     'air_2cee51fa6fdf6c0d',
     'air_12c4fb7a423df20d',
     'air_25d8e5cc57dd87d9',
     'air_57c9eea1a2b66e65',
     'air_0728814bd98f7367',
     'air_79f528087f49df06',
     'air_b45b8e456f53942a',
     'air_0a74a5408a0b8642',
     'air_890d7e28e8eaaa11',
     'air_bedd35489e666605',
     'air_daa7947e1c47f5ed',
     'air_e9ebf7fc520ac76a',
     'air_f4936b91c9addbf0',
     'air_47beaffd3806c979',
     'air_edd5e3d696a5811b'
   ],[
     'air_627cabe2fe53f33f',
     'air_c73d319ffabf287a',
     'air_c2626f5f86d57342',
     'air_42d41eb58cad170e',
     'air_f180301886c21375',
     'air_396166d47733d5c9',
     'air_a9133955abccf071',
     'air_2bffb19a24d11729',
     'air_b80fed1a07c817d2',
     'air_08f994758a1e76d4',
     'air_52e2a1fd42bc917a',
     'air_2aab19554f91ff82',
     'air_8093d0b565e9dbdf',
     'air_6c952e3c6e590945',
     'air_cf5ab75a0afb8af9',
     'air_98b54e32ccddd896',
     'air_a546cbf478a8b6e4',
     'air_dc71c6cc06cd1aa2',
     'air_2fc478dc9f0a6b31',
     'air_1653a6c513865af3',
     'air_dfad598ff642dab7',
     'air_5e70fe82f9e4fab6',
     'air_3f91d592acd6cc0b'
   ]
 ];
angular.module('myApp', ['ajoslin.promise-tracker'])
  .controller('help', function ($scope, $http, $log, promiseTracker, $timeout) {

    $scope.subjectListOptions = {
      'bug': 'Report a Bug',
      'account': 'Account Problems',
      'mobile': 'Mobile',
      'user': 'Report a Malicious User',
      'other': 'Other'
    };

    $scope.storeGenreOptions = [
      'Asian',
      'Bar/Cocktail',
      'Cafe/Sweets',
      'Creative cuisine',
      'Dining bar',
      'International cuisine',
      'Italian/French',
      'Izakaya',
      'Japanese food',
      'Karaoke/Party',
      'Other',
      'Western food',
      'Yakiniku/Korean food'
    ];

    $scope.storeListOptions = [];

    $scope.getStoreListOptions = function(){
        // just some silly stuff to get the key of what was selected since we are using simple arrays.
        var key = $scope.storeGenreOptions.indexOf($scope.store_genre);
        // Here you could actually go out and fetch the options for a server.
        var myNewOptions = storeListOptions[key];
        // Now set the options.
        $scope.storeListOptions = myNewOptions;
      };
    // Inititate the promise tracker to track form submissions.
    $scope.progress = promiseTracker();

    // Form submit handler.
    $scope.sampleData = function(){
      $scope.store_genre= "Asian";
      $scope.getStoreListOptions();
      $scope.air_store_id = "air_764f71040a413d4d";
      $scope.visit_date = "2016-01-12";

    };

    $scope.submit = function(form) {

      $scope.submitted = true;
      if (form.$invalid) {
        alert("Please enter valid input.");
        return;
      }
      //var reqBody = [$scope.visit_date,$scope.air_store_id,0];
      $scope.callService = true;
      var data = {
      "Inputs": {
        "input1": {
          "Values": [[$scope.air_store_id,$scope.visit_date,0]]
        }
      },
      "GlobalParameters": {}
      };

      //data.Inputs.input1.Values = reqBody;

      $http.post('/submit',data).then(function(response){
        $scope.result=response.data;
        $scope.callService = false;
      });
    };
  });
