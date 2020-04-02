import IModuleCheckerConfig from './types/module-checker-config';
export declare class ModulesChecker {
    readonly dir: string;
    readonly config: IModuleCheckerConfig;
    static readonly defaultConfig: IModuleCheckerConfig;
    constructor(dir: string, config?: IModuleCheckerConfig);
    checkModules(): string[];
    getDeps(): string[] | null;
    isScriptEs5(scriptPath: string, dependencyName: string): boolean;
    private dependenciesWithoutBabelAndWebpackPages;
    private getDepsFromRootPackageJson;
    private getAllNodeModules;
}
