import { Container } from 'typedi';
import ModulesRegistry from './ModulesRegistry';
import GlobalContext from './context/GlobalContext';
import ModuleContext from './context/ModuleContext';
import Context from './context/Context';

export function registerModule(name, color) {
    const moduleContext = new ModuleContext(name, color);
    Container.of(name).set(ModuleContext, moduleContext);
    ModulesRegistry.addModule(moduleContext);
    return moduleContext;
}

export {
    ModulesRegistry,
    GlobalContext,
    ModuleContext,
    Context
}